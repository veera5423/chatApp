
const { cloudinary } = require("../lib/cloudnary.js");
const { GenerateToken } = require("../lib/utils.js");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    console.log("Incoming request data:", req.body); // Log incoming request data

    // Validate request body
    const { username, phone_number, email, password } = req.body;
    if (!username || !phone_number || !email || !password) {
        return res.status(400).json({ success:false,message: "All fields are required" });
    }

    try {
        // Check if user already exists by username or email
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User with this username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, phone_number, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ success:true, message: "User created successfully", user });
    } catch (err) {
        console.error("Error creating user:", err); // Log the actual error for debugging
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // Generate a token (optional)
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        GenerateToken(user._id,res);

        res.status(200).json({ success: true, message: "Login successful",});
        
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ success: false, message: "Error logging in user", error: err.message });
    }
};

const logOut = async(req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch(error){
        console.log("Error in logout Controller",error.message);
        res.status(500).json({message:"internal server error"});
        
    }
}

const updateProfile=async (req,res)=>{
    try{
        const {profilePic}=req.body;
        const userId=req.user._id;

        if(!profilePic)
        {
            return res.status(400).json({message:"profile pic is required"});
        }
        const uploadResponse=await cloudinary.uploader.upload(profilePic);
        const updatedUser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true});
        res.status(200).json(updatedUser);
    }
    catch(error){
        console.log("errror in update profile", error.message);
        res.status(500).json({message:"internal server error"})
        
    }

}

const checkAuth=async=(req,res)=>{
    try{
        res.status(200).json(req.user);
    }
    catch(error){
        console.log("error in the checkauth route");
        res.status(500).json({message:"internal server"});
        
    }
}
module.exports = { createUser, loginUser, logOut, updateProfile,checkAuth};
