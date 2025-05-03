import {faCameraAlt,  faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

const Profile = () => {

   const {authUser}=useAuthStore();
   console.log("in profile page",authUser);
   
    const isUpdatingProfile =false;

    const [selectedImg, setSelectedImg] = useState(null);

    const handleImageUpload = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
  
      reader.readAsDataURL(file); 
  
      reader.onload = async () => {
        const base64Image = reader.result;
        setSelectedImg(base64Image);
        await updateProfile({ profilePic: base64Image });
      };
    };

    const updateProfile=async({profilePic})=>{
     
      fetch("http://localhost:3000/auth/update-profile",{
        method:'PUT',
        headers:{
          "Content-Type":"application/json",
        },
        credentials:'include',
        body:JSON.stringify({
          profilePic,
        })
      })
      .then((data)=>{
        toast.success(data.message);
        // Refresh the page to reflect updated profile image
        window.location.reload();
      })
      }
    

  return (
    <div className="h-screen pt-20 pb-20 borde">
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="bg-base-300 rounded-xl p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold ">Profile</h1>
          <p className="mt-2">Your profile information</p>
        </div>

        {/* avatar upload section */}

        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={authUser.profilePic|| "/Lord Krishna & Queen Radha.jpg"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4 "
            />
            <label
              htmlFor="avatar-upload"
              className={`
                absolute bottom-0 right-0 
                bg-base-content hover:scale-105
                p-2 rounded-full cursor-pointer 
                transition-all duration-200
                ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
              `}
            >
                <FontAwesomeIcon icon={faCameraAlt} className="w-5 h-5 text-base-200" />
              {/* <faCamera className="w-5 h-5 text-base-200" /> */}
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-zinc-400">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              {/* <User className="w-4 h-4" /> */}
              Full Name
            </div>
            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.username||"veera"}</p>
          </div>

          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
            <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4" />
              {/* <Mail className="w-4 h-4" /> */}
              Email Address
            </div>
            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email||"veera@gmail.com"}</p>
          </div>
        </div>

        <div className="mt-6 bg-base-300 rounded-xl p-6">
          <h2 className="text-lg font-medium  mb-4">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span>Member Since</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Account Status</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile