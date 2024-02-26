import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors()); 
app.use(cookieParser());
app.use(express.json());
dotenv.config({
  path: "./env",
});

/// User Router
import userRouter from "./router/user.router.js";
import productRouter from "./router/product.router.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

export default app;
