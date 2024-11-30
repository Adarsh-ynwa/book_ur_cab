const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");



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

module.exports=app;