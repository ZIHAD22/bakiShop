import { Router } from "express";
import { createCustomer } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/", createCustomer);

export default userRoutes;
