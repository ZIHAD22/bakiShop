import { TSendRes } from "./sendRes.interface";

const sendRes = <T>(payload: TSendRes<T>) => {
  const { res, message, status, data, error, success } = payload;
  if (error) {
    return res.status(status ? (status as number) : 200).json({
      success: false,
      message,
      error,
    });
  }

  return res.status(status ? (status as number) : 500).json({
    success: true,
    message,
    data,
  });
};

export default sendRes;
