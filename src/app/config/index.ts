import dotEnv from "dotenv";
import path from "path";

dotEnv.config();

let DB_URL: string;
const nodeEnv = process.env;
const PORT = process.env.PORT;

if (nodeEnv.NODE_ENV === "dev") {
  DB_URL = nodeEnv.DEV_DB_URL as string;
}
if (nodeEnv.NODE_ENV === "prod") {
  DB_URL = nodeEnv.PROD_DB_URL as string;
}

export { DB_URL, PORT };
