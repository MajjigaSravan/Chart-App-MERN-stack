import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import meassageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";

import connectTOMongoDB from "./db/connectToMongoDB.js";

 const app=express();
 const PORT=process.env.PORT || 5000;

 dotenv.config();

 app.use(express.json());
 app.use(cookieParser());

 app.use("/api/auth",authRoutes);
 app.use("/api/messages",meassageRoutes);
 app.use("/api/users",userRoutes);


 app.get("/",(req,res)=>{
    res.send("env");
 });


 app.listen(PORT,()=>{
    connectTOMongoDB();
    console.log(`sever is running on port ${PORT}`);
});