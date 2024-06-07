import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createCustomerService = async (payload: TUser) => {
  console.log("ok");
  const result = await UserModel.create(payload);
  return result;
};



export { createCustomerService };
