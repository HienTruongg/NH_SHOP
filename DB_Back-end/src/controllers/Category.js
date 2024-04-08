import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import Categories from "../models/Categories";
import Products from "../models/Products";
export const createCategory = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      slug: slugify(req.body.name, "_"),
      image: req.body.image,
    };
    const category = await Categories.create(data);
    return res.status(StatusCodes.CREATED).json(category);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const getCategoryAll = async (req, res) => {
  try {
    const product = await Categories.find({});
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy danh mục" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const getCateroryId = async (req, res) => {
  try {
    const product = await Products.find({ category: req.params.id });
    const category = await Categories.findById(req.params.id);
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy danh mục theo ID" });
    }
    return res.status(StatusCodes.CREATED).json({
      category,
      product,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const deleteCategoryId = async (req, res) => {
  try {
    const product = await Categories.findByIdAndDelete(req.params.id);
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy danh mục theo ID" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const updateCategoryId = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      slug: slugify(req.body.name, "_"),
      image: req.body.image,
    };
    const product = await Categories.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (product.length === 0) {
      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: "Không tìm thấy danh mục theo ID" });
    }
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
