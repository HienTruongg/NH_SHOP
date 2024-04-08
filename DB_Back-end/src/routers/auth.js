import express from "express";
import { singin, singup } from "../controllers/Auth";
const routerAuth = express.Router();

routerAuth.post("/register", singup);
routerAuth.post("/login", singin);
export default routerAuth;
