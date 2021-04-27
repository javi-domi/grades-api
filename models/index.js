import mongoose from "mongoose";
import { gradeModel } from "./gradeModel.js";
import dotenv from "dotenv";
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.gradeModel = gradeModel;
db.cors_origin = process.env.CORS_ORIGIN;

export { db };
