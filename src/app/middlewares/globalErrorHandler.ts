import { ErrorRequestHandler } from "express";
import sendRes from "../utils/sendRes/sendRes";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = err.message || "Something went wrong!";
  sendRes({
    res,
    message,
    error: err,
  });
};

export default globalErrorHandler;
