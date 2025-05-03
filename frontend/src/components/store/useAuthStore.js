import {create} from "zustand";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import {io} from "socket.io-client"

const BASE_URL= "http://localhost:3000";
 
export const useAuthStore=create((set,get)=>({
authUser:null,
onlineUsers:[],
socket:null,

checkAuth: async () =>{
    try{
        const res=await axiosInstance.get("/auth/check");
        set({authUser:res.data});
        get().connectSocket();

    }
    catch(error){
        console.log("Error in the Auth user:",error);
        set({authUser:null});
    }
    finally{
        console.log("finally");
        
    }
},
logIn: async ({username,password})=>{
    try{
        
        
        const res= await axiosInstance.post("/auth/login",{username,password})
        set({authUser:res.data});
        
        
        toast.success(res.data.message)
        get().connectSocket();
       

    }
    catch(error){
        console.log("Error in the login user:",error.message);
        toast.error(error.message);
        set({authUser:null});
    }
},

logOut: async()=>{
    try{
        const res=axiosInstance.post("/auth/logout")
        set({authUser:null})
        toast.success("LoggedOut Sucessfully")
        get().disconnectSocket();
    }
    catch(e){
console.log("logout error ");
toast.error(e);

    }

},
connectSocket:()=>{
const {authUser}=get()
if(!authUser||get().socket?.connected) return
    const socket=io(BASE_URL,{
        query:{
            userId:authUser._id,
        },
    })
    socket.connect()

    set({socket:socket});

    socket.on("getOnlineUsers",(userIds)=>{
        set({onlineUsers:userIds});
    })

},
disconnectSocket:()=>{
    if(get().socket?.connected) get().socket.disconnect()
}
}));