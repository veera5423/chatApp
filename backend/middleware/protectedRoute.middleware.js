const jwt= require("jsonwebtoken");
const User= require("../models/User");

const protectedRoute=async (req,res,next)=>{
    try{
    const token = req.cookies.jwt;
    if(!token)
    {
        return res.status(401).json({message:"UnAuthorized-no token Provided"});
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({message:"Invalid token"});
    }
    
    const user=await User.findById(decoded.UserId).select("-password");

    if(!user){
        return res.status(404).json({message:"User Not Found"});
    }
    req.user=user

    next()
}
catch(error){
    console.error("Error in the protected middleware:", error);
    res.status(500).json({message:"Internal server error"})
    

}};
module.exports={protectedRoute};
