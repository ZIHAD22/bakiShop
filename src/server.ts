import app from "./app";
import { PORT } from "./app/config";

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
