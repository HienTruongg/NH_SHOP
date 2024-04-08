import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.required(),
  description: Joi.string().required(),
  featured: Joi.boolean(),
  gallery: Joi.object(),
  discount: Joi.number().min(0).max(100),
  countInStock: Joi.number().min(0),
});

export const userSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
});

export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});
export const categorySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
});
export const categoryupdateSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  slug: Joi.string(),
});
