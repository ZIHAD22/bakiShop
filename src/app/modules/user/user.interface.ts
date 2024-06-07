type TUser = {
  id: string;
  npChange?: boolean;
  role: "customer" | "shop-owner" | "admin";
  status?: "in-progress" | "block";
  isDeleted?: boolean;
};

export { TUser };
