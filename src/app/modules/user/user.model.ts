import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    npChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["customer", "shop-owner", "admin"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "block"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<TUser>("User", userSchema);

export default UserModel;
