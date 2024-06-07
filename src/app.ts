import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();
const port = 3000;

// body parser
app.use(cors());
app.use(express.json());

// External Route Handling
app.use("/api/v1", router);

app.use(globalErrorHandler);

export default app;
