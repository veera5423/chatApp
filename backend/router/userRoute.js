const express=require('express');
const router=express.Router()
const usercontroller=require('../controllers/userController');
const User=require("../models/User");
const { protectedRoute } = require('../middleware/protectedRoute.middleware');

//http-Methods can be used 
router.post("/sign-up",usercontroller.createUser);
router.post("/login", usercontroller.loginUser);
router.post("/logout",usercontroller.logOut);
router.put("/update-profile",protectedRoute,usercontroller.updateProfile);

router.get("/check",protectedRoute,usercontroller.checkAuth)// To identify is user authenticated when page is refreshed
module.exports=router
