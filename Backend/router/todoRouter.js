import express from "express";
import { getTodos } from "../controller/todoController.js"

const router = express.Router();

router.route("/").get(getTodos);

export default router;