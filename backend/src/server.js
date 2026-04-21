import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import path from "path";
import {serve} from "inngest/express"
import{inngest,functions} from "./lib/inngest.js"
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middleware/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"

dotenv.config();
const __dirname=path.resolve();

//middleware
app.use(express.json())
app.use(clerkMiddleware());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
console.log(ENV.PORT);
app.use("/api/inngest", serve({ client: inngest, functions }));
app.get("/help", (req, res) => {
    res.status(200).json({ msg: "success from api" });
});
app.get("api/chat",chatRoutes)
app.get("/health",(req,res)=>{
    req.auth
    res.status(200).json({msg:"api is running"});
});
app.get("/api/sessions",sessionRoutes)
// app.get("/videocalls",protectRoute,(req,res)=>{
//     res.status(200).json({msg:"this is videocall endpoint"})
// })

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