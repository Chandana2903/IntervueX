import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import path from "path";
import {serve} from "inngest/express"
import{inngest,functions} from "./lib/inngest.js"
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const __dirname=path.resolve();

//middleware
app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
console.log(ENV.PORT);
app.use("/api/inngest", serve({ client: inngest, functions }));
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