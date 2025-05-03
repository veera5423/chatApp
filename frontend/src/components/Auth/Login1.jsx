import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import "./AuthForm.css";
import { toast } from 'react-hot-toast';
import { useAuthStore } from "../store/useAuthStore";

const Login1 = ({ setIsForgot }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logIn}=useAuthStore();
  

  // Dummy credentials for validation
  // const validCredentials = {
  //   username: "user123",
  //   password: "pass123",
  // };

  const handleLogin = () => {
    
      
      logIn({username,password});
    // if (username === validCredentials.username && password === validCredentials.password) {
    //   navigate("/hero"); // Redirect to ChatRoom page
    // } else {
    //   setError("Invalid credentials. Please try again.");
    // }
  //   fetch("http://localhost:3000/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials:"include",

  //     body: JSON.stringify({
  //       username: username,
  //       password: password
  //     })

  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
          
  //         navigate("/hero"); 
  //         toast.success(data.message)
  //       } else {
  //         console.log("Error in handle sign in");
  //         toast.error(data.message || "Login failed"); // Show error toast
  //         setError("Invalid credentials. Please try again.");
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error("An error occurred");
  //       setError("An error occurred. Please try again.");
  //       console.error("Error:", error);
  //     });


  };
  const handleSignup = () => {
    navigate("/register");
  };
  const handleForgotPassword = () => {
    setIsForgot(true);
  };
  

  return (
     <>
        <div className="social-login flex flex-row gap-5 justify-center items-center text-3xl mt-4 cursor-pointer pl-10">
          <FontAwesomeIcon icon={faGoogle} className="hover:text-blue-500" />
          <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-500" />
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-500" />
        </div>

        <div className="login relative">
          <h2 className="head">Login</h2>

          <input
            type="text"
            name="username"
            id="usrn"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            id="pswrd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />

          {error && <p className="error-message text-red-500">{error}</p>}

          <button onClick={handleLogin} className="button">
            Sign in
          </button>

          <hr className="divider" />

          <span onClick={handleForgotPassword} className="forgot-password">Forgot password?</span>
          <p className="signup-prompt absolute -bottom-11 text-xs lg:text-base">
            Don&apos;t have an account? <span onClick={handleSignup} className="signup-link text-fuchsia-50 hover:text-blue-400">Sign up</span>
          </p>
        </div>
      </>
    
  );
};

export default Login1;
