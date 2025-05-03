 const express =require("express");
const { protectedRoute } = require("../middleware/protectedRoute.middleware");
const messageController=require("../controllers/messageController");

 const router=express.Router();

 router.get("/users",protectedRoute,messageController.getUsersForSidebar);
 router.get("/:id",protectedRoute,messageController.getMessages);
 router.post("/send/:id",protectedRoute,messageController.sendMessages);

 module.exports=router