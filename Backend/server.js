import path from 'path';
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import meassageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";

import connectTOMongoDB from "./db/connectToMongoDB.js";
import { app,server } from "./socket/socket.js";

 
 const PORT=process.env.PORT || 5000;

 const __dirname=path.resolve();

 dotenv.config(); 

 app.use(express.json());
 app.use(cookieParser());

 app.use("/api/auth",authRoutes);
 app.use("/api/messages",meassageRoutes);
 app.use("/api/users",userRoutes);

 app.use(express.static(path.join(__dirname,"/Frontend/dist")));

 app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"Frontend","dist","index.html"));
 });

//  app.get("/",(req,res)=>{
//     res.send("env");
//  });


 server.listen(PORT,()=>{
    connectTOMongoDB();
    console.log(`sever is running on port ${PORT}`);
});