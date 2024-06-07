import { RequestHandler } from "express";

const catchAsync = (payload: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(payload(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
