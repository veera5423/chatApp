const { cloudinary } = require("../lib/cloudnary");
const { io ,getReceiverSocketId} = require("../lib/socket");
const User = require("../models/User");
const Message=require("../models/message.model");

const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filtredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filtredUsers);
    } catch (error) {
        console.log("error in getusersidebar",error.message);
        res.status(500).json({message:"internal server error"});
        
    }
};

const getMessages=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const myId=req.user._id;

        const messages=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
        ],
        });
        res.status(200).json(messages);
    } catch (error) {
        console.log("error in the getmessages",error.message);
        res.status(500).json({error:"internal server error"})
        
    }
};

const sendMessages=async(req,res)=>{
    try {
        const {text,image,voice}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        
        let imageUrl;
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        });

        await newMessage.save();

        //  realtime functionality of messageing using the socket.io
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverId).emit("newMessage",newMessage)

        } 
        res.status(200).json(newMessage);

    } catch (error) {
        console.log("error in the sendmessage Controller",error.message);
        res.status(500).json({error:"internal server error"});
        
    };
}

module.exports={getUsersForSidebar,getMessages,sendMessages};