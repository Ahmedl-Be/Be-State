import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log("ERROR >>>",err)
});

const app = express();

app.listen(5000,()=>{
    console.log("Server is Running on port 5000 !!")
})
