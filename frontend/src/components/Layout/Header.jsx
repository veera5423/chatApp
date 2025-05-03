import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faEllipsisVertical, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";
import { useNavigate, Link } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const navigate = useNavigate();
  const {logOut}=useAuthStore();

  const handleLogout = async () => {
    // try {
    //   fetch('http://localhost:3000/auth/logout', {
    //     method: 'POST', // or 'GET' depending on your backend route
    //     credentials: 'include' // to include cookies
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.message === "Logged out successfully") {
    //         // Handle successful logout, e.g., redirect to login page or clear user state
    //         console.log("Logout successful");
    //         toast.success(data.message);
    //         navigate('/');
    //       }
    //     })
    //     .catch(error => {
    //       toast.error(error.message); // Show error toast
    //       console.error('Error during logout:', error);
    //     });
      
    //   // navigate('/');
    // } catch (error) {
    //   console.error('Logout failed:', error);
    // }

    logOut();
  };

  // const toggleMode = () => {
  //   setMode(mode === "light" ? "dark" : "light");
  // };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/hero"><h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">VeeraVox</h1></Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/talk" className="hover:underline">Talk with Strangers</Link>
            {/* <button onClick={toggleMode}>
              <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} />
            </button> */}
            <div className="relative">
              <button 
                onClick={() => setShowDesktopMenu(!showDesktopMenu)}
                className="p-2 rounded-full text-gray-300 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              {showDesktopMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faUser} className="mr-3" />Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faGear} className="mr-3" />Settings
                  </Link>
                  <a href="#"  onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faRightFromBracket} className="mr-3" />Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Nav */}
          {showMobileMenu && (
            <div className="absolute top-16 left-0 right-0 bg-gray-200 shadow-lg md:hidden">
              <Link to="/about" className="block p-4 hover:underline">About</Link>
              <Link to="/talk" className="block p-4 hover:underline">Talk with Strangers</Link>
              {/* <button onClick={toggleMode} className="block w-full p-4 text-left">
                <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} className="mr-3" />
                {mode === "dark" ? 'Light Mode' : 'Dark Mode'}
              </button> */}
              <Link to="/profile" className="block p-4 hover:underline"><FontAwesomeIcon icon={faUser} className="mr-3" />Profile</Link>
              <Link to="/settings" className="block p-4 hover:underline"><FontAwesomeIcon icon={faGear} className="mr-3" />Settings</Link>
              <a href="#"  onClick={handleLogout} className="block p-4 hover:underline"><FontAwesomeIcon icon={faRightFromBracket} className="mr-3" />Logout</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;

