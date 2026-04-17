import mongoose from "mongoose";
import {ENV} from "./env.js"

export const connectDB=async()=>{ 
    try{
        if(!ENV.DB_URL){
            throw new Error("DB URL not defined");
        }
        const conn=await mongoose.connect(ENV.DB_URL)
        console.log("Connected to DB",conn.connection.host);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};
