 const jwt = require("jsonwebtoken");

const  GenerateToken=(UserId,res)=>{
    const token=jwt.sign({UserId},process.env.JWT_SECRET,{expiresIn:'1d'});

    res.cookie('jwt',token,{
        maxAge:1*24*60*60*1000,
        httpOnly:true,
        sameSite:"lax",
        secure:process.env.NODE_ENV!=="development"
    });
    return token;
}

module.exports={GenerateToken}