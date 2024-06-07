import express, { Application, Request, Response } from "express";
import router from "./app/routes";
const app: Application = express();
const port = 3000;

app.use("/api/v1", router);

console.log("change folder name");

export default app;
