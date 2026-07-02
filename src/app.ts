import express, { Application } from "express";
import userRoutes from "./api/user.api";


export const app: Application = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use(
  "/api/users",
  userRoutes
);


// Test route
app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "Hospital API is running"
  });

});


export default app;