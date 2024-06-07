import httpStatus from "http-status";
import { RequestHandler } from "express";
import sendRes from "../../utils/sendRes/sendRes";
import { TUser } from "./user.interface";
import catchAsync from "../../utils/catchAsync/catchAsync";
import { createCustomerService } from "./user.service";

const createCustomer: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const data = await createCustomerService(payload);
  sendRes<TUser>({
    res,
    status: httpStatus.CREATED,
    message: "Customer Created Successfully",
    data,
  });
});

export { createCustomer };
