import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import Login1 from "./Login1";
import Forgotpassword from "./Forgotpassword";

const Login = () => {
  const [isforgot,setIsForgot]=useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-16">

    
    <div className="main ">
      <div className="left hidden md:block md:flex md:flex-col md:justify-center md:items-center">
        <h1 className="app-title font-bold text-5xl font-serif lg:text-7xl">VeeraVox</h1>
        <h2 className="welcome-message">Welcome to VeeraVox</h2>
        <p className="tagline">Your Voice, Amplified. Real-Time. Real Connections.</p>
      </div>

      <div className="right">
        { isforgot ?(<Forgotpassword />):(<Login1 setIsForgot={setIsForgot}/>)}
      </div>
    </div>
    </div>
  );
};

export default Login;
