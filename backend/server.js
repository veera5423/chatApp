
const dotEnv=require('dotenv');
dotEnv.config();

const express =require('express');
const mongoose =require('mongoose');
const cors=require('cors');
const userRoute=require('./router/userRoute');
const User=require('./models/User')
const messageRoute=require("./router/messageRoute")
const cookieParser =require("cookie-parser");
const { app, server } = require('./lib/socket');



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));// to get access from another servers

app.use(express.json({ limit: '10mb' })); // Middleware to parse JSON request bodies with increased size limit

app.use(cookieParser());

app.use("/auth", userRoute);
app.use("/user/message",messageRoute);

//MongoDB connection
mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
    });


const port= process.env.PORT ||3000;
app.get("/check",(req,res)=>{
    res.send("Checking the server done")
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
