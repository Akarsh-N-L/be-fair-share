import express from "express";
import { addTransaction } from "./split.controller";

const router = express.Router();

router.post("/addTransaction", addTransaction);

export default router;
