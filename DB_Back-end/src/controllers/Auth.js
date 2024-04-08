import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import jwt from "jsonwebtoken";
import User from "../models/User";
const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Trườn name là bắt buộc",
    "string.empty": "Trường name không được để trống",
    "string.min": "Trường name phải có ít nhất {#limit} ký tự",
    "string.max": "Trường name không được vượt quá {#limit} ký tự",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Trường email là bắt buộc",
    "string.empty": "Trường email không được để trống",
    "string.email": "Trường email phải là email",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Trường password là bắt buộc",
    "string.empty": "Trường password không được để trống",
    "string.min": "Trường password phải có ít nhất {#limit} ký tự",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.required": "Trường confirmPassword là bắt buộc",
    "any.only": "Trường confirmPassword phải trùng với password",
  }),
});
export const singup = async (req, res) => {
  const { email, password, name, avatar } = req.body;
  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.details.map((e) => e.message),
    });
  }
  const exisUser = await User.findOne({ email });
  if (exisUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: ["Email đã tồn tại"],
    });
  }
  const hashedPassword = await bcryptjs.hash(password, 12);
  const role = (await User.countDocuments({})) === 0 ? "admin" : "user";
  const user = await User.create({
    ...req.body,
    password: hashedPassword,
    role,
  });
  return res.status(StatusCodes.CREATED).json({
    user,
  });
};
export const singin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: ["Email không tồn tại"],
    });
  }
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: ["Mật khẩu không đúng"],
    });
  }
  const token = jwt.sign({ userId: user._id }, "jksadfjndsjno", {
    expiresIn: "7d",
  });
  return res.status(StatusCodes.OK).json({
    user,
    token,
  });
};
export const logout = async (req, res, next) => {};
