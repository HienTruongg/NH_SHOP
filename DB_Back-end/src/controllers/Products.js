import { StatusCodes } from "http-status-codes";
import Products from "../models/Products";

export const createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const product = await Products.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const getProductAll = async (req, res) => {
  try {
    const product = await Products.find({});
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy sản phẩm" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const getProductId = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy sản phẩm theo ID" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const deleteProductId = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy sản phẩm theo ID" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const updateProductId = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy sản phẩm theo ID" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const related = async (req, res) => {
  console.log(req.params.category);
  try {
    const product = await Products.find({ category: req.params.category });
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
