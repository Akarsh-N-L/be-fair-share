import express from "express";
import splitRouter from "./split/split.router";

const router = express.Router();

router.use("/split", splitRouter);

export default router;
