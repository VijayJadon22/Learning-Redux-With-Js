import express from "express";
import todoRouter from "./router/todoRouter.js";
import cors from "cors";
const server = express();
const PORT = 4100;

server.use(cors());

server.use("/get/todos", todoRouter);

server.get("/", (req, res) => {
    res.send("Welcome to Homepage");
})

server.listen(PORT, () => console.log(`Server started at PORT:`, PORT));