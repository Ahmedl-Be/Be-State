import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
dotenv.config();


mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log("ERROR >>>",err)
});

const app = express();

// Use CORS middleware
app.use(cors())

app.use(express.json());
app.listen(5000,()=>{
    console.log("Server is Running on port 5000 !!")
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);


// Global error handler 
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        success:false,
        status: error.statusText || "ERROR",
        message: error.message,
        code: error.statusCode || 500,
        data: null
    })
})
