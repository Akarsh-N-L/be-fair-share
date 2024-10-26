import express from "express";
import indexRouter from "./index.router";
import connectToMongo from "./utils/mongo";

const app = express();

app.use(express.json());
app.use("/api", indexRouter);

const port = 3000;

app.listen(port, async () => {
  await connectToMongo();
  console.log(`Server is running on port ${port}`);
});
