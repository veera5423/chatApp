import "./AuthForm.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault()
    // Validate fields
    if (!username || !phone || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!isTermsAccepted) {
      setError("You must accept the Terms and Conditions.");
      return;
    }
    fetch("http://localhost:3000/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        phone_number: phone,
        email: email,
        password: password,
      })

    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setSuccessMessage(true);
          toast.success(res.message);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
        else {
          setError(res.message);
        }
      })
      .catch((error) => {
        setError("Error! Please try again later")
        console.error('Error:', error);
      });
  };
  // Clear error and show success message
  // setError("");
  // setSuccessMessage(true);

  // Redirect to login after 2 seconds
  // setTimeout(() => {
  //   navigate("/");
  // }, 2000);


  return (
    // <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600  pt-20">

    // </div>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 -mt-16 p-2 pb-[395px] pr-[62px] md:pb-[100px] xl:pb[-54px]">
      <div className="main ml-10">
      <div className="left hidden md:block md:flex md:flex-col md:justify-center md:items-center">
        <h1 className="-mx-0 font-bold text-5xl font-serif lg:text-7xl">VeeraVox</h1>
        <h1>Welcome to VeeraVox</h1>
        <h1>Your Voice, Amplified. Real-Time. Real Connections.</h1>
      </div>
      <div className="login">
        <h2 className="head">Register</h2>
        <div className="cont">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="usrn"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phn"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="eml"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="psw"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            id="cpsw"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="terms flex flex-row items-center w-fit">
            <input
              type="checkbox"
              name="terms and conditions"
              id="tc"
              required
              className="mt-2"
              checked={isTermsAccepted}
              onChange={(e) => setIsTermsAccepted(e.target.checked)}
            />
            <span>Terms & Conditions</span>
          </div>
        </div>
        {error && <p className="error-message text-red-500">{error}</p>}
        {successMessage && (
          <p className="success-message text-green-500">
            Registered successfully! Redirecting to login...
          </p>
        )}
        <button type="submit" id="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
    </div>
  );
};

export default Register;
