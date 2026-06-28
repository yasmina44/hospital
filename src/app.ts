import express, { Application } from "express";
import cors from "cors";

import userRoutes from "./api/user.api";


export const app: Application = express();


// middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));


// routes
app.use(
    "/api/users",
    userRoutes
);


// test
app.get("/", (req,res)=>{

    res.status(200).json({
        success:true,
        message:"Hospital API running"
    });

});
