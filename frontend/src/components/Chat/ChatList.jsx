import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";


const ChatList = () => {
  const navigate = useNavigate();
  const [isPopUp,setIspopup]=useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {getUsers,users,isUserLoading,selectedUser,setSelectedUser,unreadMessages}=useChatStore();
  const{onlineUsers}=useAuthStore();
  const [showOnlineOnly,setShowOnlineOnly]=useState(false);

useEffect(()=>{
  getUsers();
},[getUsers]);

const filteredUsers= showOnlineOnly? users.filter((user)=>onlineUsers.includes(user._id)):users
  
  const handleBack = () => {
    navigate(-1);
  };

  const handleChatSelect = (chat) => {
    navigate(`/chatroom`, { state: chat }); // sends the state of the component
    setSelectedUser(chat)
  };

  const closePopUp=()=>{
    setIspopup(!isPopUp);
  };

  const handleAdd=()=>{
    closePopUp();
  }
  
 const filteredUsers1= users.filter((user)=>
 user.username.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="w-full h-screen bg-gray-100 p-4 flex flex-col">
      <div className="header w-full h-16 bg-[#3498DB] rounded-t-lg shadow-md flex items-center justify-between   px-6 mb-4">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors md:hidden"
          aria-label="Go back"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-white hover:text-gray-800"
          />
        </button>

        <div className="text-xl font-semibold text-white">Chats</div>
        <button onClick={closePopUp}>
          <div className="addfriend text-xl font-semibold text-white ">
          <FontAwesomeIcon icon={faUserPlus} /></div>
        </button>
      </div>
      {/* popup section */}
      {isPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96 space-y-4">
            <h3 className="text-xl font-semibold">Add a Friend</h3>

            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
             
              className="w-full p-2 border border-gray-300 rounded"
            />

            <div className="max-h-48 overflow-y-auto space-y-2">
              {filteredUsers1.length > 0 ? (
                filteredUsers1.map((user) => (
                  <div
                    key={user.username}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded"
                  >
                    <span>{user.username}</span>
                    <button
                      onClick={() => handleAdd(user)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      Add
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No users found.</p>
              )}
            </div>

            <button
              onClick={closePopUp}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
       )}
       {/* popupover */}
      

      <div className="chat-list-body w-full flex-1 bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
        
        {filteredUsers.map((chat, index) => (
          
          
          <div
            key={index}
            className={`chat-item flex items-center p-4 border-b ${chat === selectedUser?"bg-[#bcc9c9]":" border-gray-200"} border-gray-200 hover:bg-gray-50 cursor-pointer`}
            onClick={() => handleChatSelect(chat)}
          >
            <div className={`avatar relative w-12 h-12 ${chat === selectedUser?"bg-[#52dddd]":" bg-[#52dddd]"} rounded-full flex items-center justify-center mr-4`}>
              
              <img src={chat.profilePic} alt= {chat.username}  className="size-12 object-cover rounded-full"/>
              {onlineUsers.includes(chat._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )}
              {unreadMessages[chat._id] > 0 && (
                <span className="absolute top-0 right-0 size-4 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadMessages[chat._id]}
                </span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {chat.username}
              </h3>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(chat._id) ? "Online" : "Offline"}
              </div>
              <p className="text-sm text-gray-600">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChatList;
