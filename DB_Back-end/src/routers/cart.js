import express from "express";
import {
  CreateCart,
  GetCartId,
  decreaseCart,
  increaseCart,
  removeCart,
  updateCart,
} from "../controllers/Cart";

const routerCart = express.Router();

routerCart.post("/cart", CreateCart);
routerCart.get("/cart/:userId", GetCartId);
routerCart.delete("/cart/remove", removeCart);
routerCart.put("/cart/update", updateCart);
routerCart.post("/cart/increase", increaseCart);
routerCart.post("/cart/decrease", decreaseCart);

export default routerCart;
