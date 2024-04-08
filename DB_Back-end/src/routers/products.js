import express from "express";
import {
  createProduct,
  deleteProductId,
  getProductAll,
  getProductId,
  related,
  updateProductId,
} from "../controllers/Products";
const routerProduct = express.Router();

routerProduct.get("/products", getProductAll);
routerProduct.get("/products/:id", getProductId);
routerProduct.delete("/products/:id", deleteProductId);
routerProduct.put("/products/:id", updateProductId);
routerProduct.get("/products/related/:category", related);
routerProduct.post("/products", createProduct);

export default routerProduct;
