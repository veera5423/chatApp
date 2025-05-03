import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faPhone,
  faVideo,
  faEllipsisVertical,
  faMicrophone,
  faImage,
  faPaperclip,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./chat.css";
import ChatList from "./ChatList";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import MessageSkeleton from "./MessageSkeleton";

const ChatRoom = () => {
  
  const messageEndRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [message,setMessage]=useState("")
  const navigate = useNavigate();
  const { state } = useLocation();
  const [imagePreview, setImagePreview] = useState(null);
  const mesgerName = state?.username || "Chat Room";

  const {messages,getMessages,isMessageloading,selectedUser,sendMessage,subToMessages,unsubFromMessages}=useChatStore();
  const {authUser}=useAuthStore();

  useEffect(()=>{
    
    
    
     getMessages(selectedUser._id);
     
     if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      subToMessages();

      return ()=> unsubFromMessages(); 
    }


  },[getMessages,selectedUser,messages,subToMessages,unsubFromMessages]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCall = () => {
    console.log("Starting call...");
  };

  const handleVideo = () => {
    console.log("Starting video call...");
  };

  const handleMenu = () => {
    console.log("Opening menu...");
  };

  const handleSendMessage = async () => {
    
    if(!message.trim() &&!imagePreview) return;

    try {
     
      
      await sendMessage({
        text:message.trim(),
        image:imagePreview,
      });
      
      setMessage("");
      setImagePreview(null);

    }
    catch (error) {
      console.error("Failed to send message:", error);
    }
  }
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      
      handleSendMessage();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      <div className="flex ">
        <div className="hidden md:block md:w-[35%] border-r bg-red-600">
          <ChatList />
        </div>

        <div className="chat-container w-full md:w-[65%]">
          <div className="  w-full h-screen bg-gray-100 p-4 flex flex-col">
            <div className="header w-full h-16 bg-[#3498DB] rounded-t-lg shadow-md flex items-center justify-between px-6">
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
              <img src={selectedUser.profilePic} alt= {selectedUser.username}  className="size-12 object-cover rounded-full"/>
              <div className="text-xl font-semibold text-white">
                {mesgerName}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCall}
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                  aria-label="Start call "
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white hover:text-gray-800"
                  />
                </button>
                <button
                  onClick={handleVideo}
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                  aria-label="Start video"
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="text-white hover:text-gray-800"
                  />
                </button>
                <button
                  onClick={handleMenu}
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                  aria-label="Open menu"
                >
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="text-white hover:text-gray-800"
                  />
                </button>
              </div>
            </div>
          {/* chatbody */}
          {isMessageloading ? <MessageSkeleton/>:(
            <div className="chat-room-body w-full flex-1 bg-white rounded-b-lg shadow-md flex flex-col overflow-y-auto mb-14">
              {/* <div className="received-msg flex p-4 gap-4">
                <div className="avatar flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={state.profilePic} alt="" className="size-12 object-cover rounded-full" />
                  </div>
                  <div className="text-sm text-gray-600">{mesgerName}</div>
                </div>
                <div className="flex-1 max-w-[75%] bg-[#ECF0F1] rounded-lg p-3">
                  <div className="mb-1 text-[#2C3E50] break-words">
                    {chatMsg}
                  </div>
                  <div className="text-xs text-gray-500">Time</div>
                </div>
              </div> */}

              {messages.map((msg) => (
                <div key={msg._id} className="sent-msg flex p-4 gap-4"  ref={messageEndRef}>
                  <div className="avatar flex flex-col items-center">
                    <div className={`w-10 h-10 ${msg.senderId === authUser._id ?  "bg-gray-300":"bg-[#ECF0F1]"} rounded-full flex items-center justify-center`}>
                    <img src={ msg.senderId === authUser._id
                      ? authUser.profilePic
                      : selectedUser.profilePic} alt="profile pic" className="size-12 object-cover rounded-full"/>
                    </div>
                    <div className={`text-sm ${msg.senderId === authUser._id ?  "text-gray-600":" text-[#2C3E50]"}`}>
                   
          {msg.senderId === authUser._id?<p>you</p>:<p>{selectedUser.username}</p> }
                      
                    </div>
                  </div>
                  <div className="flex-1 max-w-[75%] bg-[#9fcbf8] rounded-lg p-3">
                    <div className="mb-1 text-[#384144] break-words">
                     {msg.image && (
                <img
                  src={msg.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {msg.text && <p>{msg.text}</p>}
                    </div>
                    <div className="text-xs text-gray-500">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>)}

                  {/* input section */}
            <div className="input-field w-full p-4 bg-white border-t flex items-center gap-2 fixed bottom-0 border-t-2 border-gray-200 md:w-[65%]">
            {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <FontAwesomeIcon
                  icon={faXmark}
                  className="size-3"
                />
              {/* <X className="size-3" /> */}
            </button>
          </div>
        </div>
      )}
              <input
                className=" flex px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Voice message"
              >
                <FontAwesomeIcon
                  icon={faMicrophone}
                  className="text-gray-600"
                />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={handleImageButtonClick}
                aria-label="Upload image"
              >
                <FontAwesomeIcon icon={faImage} className="text-gray-600" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  aria-label="Upload image"
                />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Upload file"
              >
                <FontAwesomeIcon icon={faPaperclip} className="text-gray-600" />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors bg-blue-500 "
                aria-label="Send message "
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-white hover:text-gray-800"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
