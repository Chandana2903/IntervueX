// const express=require("express");
import express from "express";
import {ENV} from "./lib/env.js";
const app=express()

console.log(ENV.PORT);

app.get("/help",(req,res)=>{
    res.status(200).json({msg:"success  from api"})
})
app.listen(ENV.PORT,()=>console.log("server running"));