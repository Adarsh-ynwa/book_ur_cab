const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.route");



connectToDb();


const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.send("hello world");
})
app.post("/users",userRoutes)
app.post("/captains",captainRoutes)

module.exports=app;