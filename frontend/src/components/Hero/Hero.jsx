import { useNavigate,Link } from "react-router-dom";
import "C:/veera/React/chat-app/frontend/src/App.css"

const Hero = () => {
  const navigate = useNavigate();
  const handleCheckBackLater = () => {
    navigate("/");
  }
  const handleVisitChatroom = () => {
    navigate("/chatlist");
  }
  return (
    // <div>

    //   <div className="body ">
    //     <div className="underwork flex flex-col items-center justify-center h-screen">
    //       <h1 className="text-4xl font-bold"  >Under Work</h1>
    //       <p className="text-lg text-gray-500">We are working on this page. Please check back later. or contact us for more information.</p>
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Contact Us</button>
    //       <button onClick={handleCheckBackLater} className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4">Check Back Later</button>

    //       <div className="or flex flex-col items-center justify-center mt-4">
    //         <div className="visit text-gray-500 "> you may  visit chatroom layout
    //           <button type="button" onClick={handleVisitChatroom} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"> visit</button> </div>
    //       </div>
    //     </div>
    //   </div>




    // </div>
  //   
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-darkbg dark:to-gray-900 text-white text-center px-4">
      
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
    Welcome to VeeraVox
  </h1>

  <p className="text-lg md:text-2xl mb-8 max-w-xl">
    Connect, Share, and Communicate Effortlessly — wherever you are.
  </p>

  <Link
    to="/login"
    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition mb-10"
  >
    Get Started
  </Link>

  {/* Feature Cards with Animation */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
    
    {/* Chat */}
    <Link
      to="/chatlist"
      className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition fade-up"
      style={{ animationDelay: '0.1s' }}
    >
      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Real-Time Chat</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Instantly message your friends and colleagues anywhere, anytime.
      </p>
    </Link>

    {/* Groups */}
    <Link
      to="/groups"
      className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition fade-up"
      style={{ animationDelay: '0.3s' }} 
    >
      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Create Groups</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Build communities with shared interests and stay connected.
      </p>
    </Link>

    {/* Voice Messages */}
    <Link
      to="/voice-messages"
      className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition fade-up"
      style={{ animationDelay: '0.5s' }}  
    >
      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Voice Messaging</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Express yourself better with quick and easy voice notes.
      </p>
    </Link>

  </div>

</div>
  )
}

export default Hero;