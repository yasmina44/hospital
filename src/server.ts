import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodbcofig";

import userRouter from "./api/user.api";
import companyRouter from "./api/campany.api";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/companies", companyRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});