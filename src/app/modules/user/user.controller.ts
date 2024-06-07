import { RequestHandler } from "express";

const getHello: RequestHandler = (req, res) => {
  res.json({
    all: "ok",
  });
};

export { getHello };
