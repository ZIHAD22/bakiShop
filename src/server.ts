import mongoose from "mongoose";
import app from "./app";
import { DB_URL, PORT } from "./app/config";

const main = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
