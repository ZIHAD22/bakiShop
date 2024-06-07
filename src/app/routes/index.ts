import { Request, Response, Router } from "express";
import userRoutes from "../modules/user/user.route";
import { TRoutes } from "./index.interface";
const router = Router();

const routes: [TRoutes] = [
  {
    path: "/user",
    route: userRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
