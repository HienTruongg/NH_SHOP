import express from "express";
import {
  createCategory,
  deleteCategoryId,
  getCategoryAll,
  getCateroryId,
  updateCategoryId,
} from "../controllers/Category";
const routerCategory = express.Router();
routerCategory.get("/categories", getCategoryAll);
routerCategory.get("/categories/:id", getCateroryId);
routerCategory.delete("/categories/:id", deleteCategoryId);
routerCategory.put("/categories/:id", updateCategoryId);
routerCategory.post("/categories", createCategory);

export default routerCategory;
