import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { conectDB } from "./config/db";
import routerAuth from "./routers/auth";
import routerCart from "./routers/cart";
import routerCategory from "./routers/categories";
import routerProduct from "./routers/products";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

conectDB(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Conencted to the DB");
});
app.use("/api", routerAuth);
app.use("/api", routerProduct);
app.use("/api", routerCategory);
app.use("/api", routerCart);
export const viteNodeApp = app;
