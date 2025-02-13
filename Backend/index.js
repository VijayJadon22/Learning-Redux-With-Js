import express from "express";

const server = express();
const PORT = 4100;

server.get("/", (req, res) => {
    res.send("Welcome to Homepage");
})

server.listen(PORT, () => console.log(`Server started at PORT:`, PORT));