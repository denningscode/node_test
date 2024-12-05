import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is up and running on " + port)
});

app.listen(port, () => console.log("server running"));
