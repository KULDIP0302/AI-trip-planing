import express, { app } from "express"; //create express application
import cors from "cors";
import dotenv from "dotenv"; //variables from .env file
import cookieParser from "cookie-parser";

dotenv.config();

//set server port
const PORT = process.env.PORT || 5000;

//middlewere
//allow frontend requests
app.use(cors());

//parse json data from request body
app.use(express.json());

//api route
app.get("/", (req, res) => {
  req.send("tourist package running");
});

//start server
app.listen(PORT, () => {
  console.log("server runnning on port ${PORT}");
});
