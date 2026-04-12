import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

console.log(ENV.PORT);

app.get("/help", (req, res) => {
    res.status(200).json({ msg: "success from api" });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("server running on port " + ENV.PORT);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();