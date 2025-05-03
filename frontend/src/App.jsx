import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Login from "./components/Auth/Login";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ChatRoom from "./components/Chat/ChatRoom";
import Register from "./components/Auth/Register";
import Forgotpassword from "./components/Auth/Forgotpassword";
import ChatList from "./components/Chat/ChatList";
import About from "./components/Others/About";
import PrivacyPolicy from "./components/Others/PrivacyPolicy";
import AudioCall from "./components/Calls/AudioCall";
import Terms from "./components/Layout/Terms";

import { ModeProvider} from "./components/Others/context";
import Profile from "./components/Others/Profile";
import Settings from "./components/Others/Settings";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./components/store/useAuthStore";
import { useEffect } from "react";


//
// Create a wrapper component to handle the layout logic
const AppLayout = () => {
  const location = useLocation();
  const {authUser,checkAuth,onlineUsers,login}=useAuthStore();


  // Check if current route is chat-related
  const isChatRoute = [
    "/chatroom",
    "/chatlist",
    "/",
    "/register",
    "/forgotpassword ",
  ].includes(location.pathname);

  useEffect(()=>{
    console.log("onlineUsers:",onlineUsers);
    
    checkAuth();
  },[checkAuth,login,onlineUsers]);

  console.log("AuthUser",authUser);
  

  return (
    
<>
      <Toaster  position="top-center"
  reverseOrder={false}/>
      { authUser &&!isChatRoute && <Header /> }

      <Routes>
        <Route path="/" element={!authUser?<Login />:<Navigate to="/hero"/>} />
        <Route path="/register" element={!authUser?<Register />:<Navigate to="/hero"/>} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/hero" element={authUser?<Hero/>:<Navigate to="/"/>} />
        <Route path="/chatroom" element={authUser?<ChatRoom/>:<Navigate to="/"/>} />
        <Route path="/chatlist" element={authUser?<ChatList/>:<Navigate to="/"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/audio-call" element={<AudioCall />} />
        <Route path="/profile" element={authUser?<Profile/>:<Navigate to="/"/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>

      {!isChatRoute &&authUser&& <Footer /> }
    </>
  );
};

// Update the main App component
function App() {
  return (
    <BrowserRouter>
      <ModeProvider>
        

          <AppLayout />
      
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
