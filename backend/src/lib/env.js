import dotenv from "dotenv";
dotenv.config({quiet:true});
export const ENV={
    PORT:process.env.port,
    DB_URL:process.env.DB_URL,
}