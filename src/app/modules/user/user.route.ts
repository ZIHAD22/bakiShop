import { Router } from "express";
import { getHello } from "./user.controller";

const userRoutes = Router();

userRoutes.get("/", getHello);

export default userRoutes;
