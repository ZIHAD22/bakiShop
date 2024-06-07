import { TSendRes } from "./sendRes.interface";

const sendRes = <T>(payload: TSendRes<T>) => {
  const { res, message, status, data, error, success } = payload;
  if (error) {
    return res.status(status).json({
      success: false,
      message,
      error,
    });
  }

  return res.status(status).json({
    success: true,
    message,
    data,
  });
};
