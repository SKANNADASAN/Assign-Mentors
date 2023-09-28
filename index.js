import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { createDB } from "./db.js";
import { mentorStudentRouter } from "./Mentor-Students-Routers.js"

const config = dotenv.config();

const PORT = 9090
//init the server
const app = express();

//middleware
app.use(express.json());

//Mentors-Students -Router
app.use("/",mentorStudentRouter)

//starting the server
app.listen(PORT,()=>console.log("server running in localhost:9090"))