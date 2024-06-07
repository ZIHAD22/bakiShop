import { RequestHandler } from "express";

const createCustomer: RequestHandler = (req, res) => {
  const data = req.body;
  console.log(req.body);
  res.json(req.body);
};

export { createCustomer };
