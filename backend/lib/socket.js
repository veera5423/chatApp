
const Server = require("socket.io").Server
const http = require("http")
const express = require("express");




const app=express();

const server=http.createServer(app);

const io=new Server(server,{
    cors:{

        origin:"http://localhost:5173",
    }
});


// to store online users
const onlineSocketMap={};//{userid:socketid}

function getReceiverSocketId(userId) {
   return onlineSocketMap[userId];
 }
io.on("connection",(socket)=>{
    console.log("A user connected",socket.id);

    const userId=socket.handshake.query.userId;
    if(userId) onlineSocketMap[userId]=socket.id;

    io.emit("getOnlineUsers",Object.keys(onlineSocketMap));
    
    socket.on("disconnect",()=>{
        console.log("A user disconnected",socket.id);

        delete onlineSocketMap[userId];
// to send all users 
        io.emit("getOnlineUsers",Object.keys(onlineSocketMap))
        
    })
});

module.exports= {io,app,server,getReceiverSocketId};
