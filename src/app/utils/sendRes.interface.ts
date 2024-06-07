import { Response } from "express";

type TData<T> = T;
type TError<T> = T;

type TSendResBase = {
  res: Response;
  status: number;
  message: string;
};

type TSendResData<T> = TSendResBase & {
  data: TData<T>;
  success: true;
  error?: never;
};

type TSendResError<T> = TSendResBase & {
  error: TError<T>;
  success: false;
  data?: never;
};

type TSendRes<T> = TSendResData<T> | TSendResError<T>;

export { TSendRes };
