import {create} from "zustand";
import { axiosInstance } from "../../lib/axios";
import { useAuthStore } from "./useAuthStore";
import toast from "react-hot-toast";



export const useChatStore=create((set,get)=>({
    messages:[],
    users : [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    unreadMessages: {},

    getUsers: async()=>{
        set({isUsersLoading:true})
        try {
            const res=await axiosInstance.get("/user/message/users")
            set({users:res.data})
        } catch (error) {
            toast.error(error.response.data.message);
          } finally {
            set({ isUsersLoading: false });
          }
    },

    getMessages:async(userId)=>{
        set({isMessagesLoading:true});
        try {
            const res=await axiosInstance.get(`/user/message/${userId}`);
            set({messages:res.data})
            // Clear unread count for this user when messages are fetched
            set(state => {
                const newUnread = {...state.unreadMessages};
                delete newUnread[userId];
                return { unreadMessages: newUnread };
            });
        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally{
            set({isMessagesLoading:false});
        }
    },

    sendMessage: async(messageData)=>{
        const { selectedUser, messages } = get();
        try {
            console.log("send message exicuted");
            const res=await axiosInstance.post(`/user/message/send/${selectedUser._id}`,messageData);
            console.log(messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    subToMessages:()=>{
        const {selectedUser}=get();
        if(!selectedUser) return

        const socket=useAuthStore.getState().socket;
        
        socket.on("newMessage",(newMessage)=>{
            set(state => {
                const isCurrentChat = selectedUser && newMessage.senderId === selectedUser._id;
                const newUnread = {...state.unreadMessages};
                if (!isCurrentChat) {
                    newUnread[newMessage.senderId] = (newUnread[newMessage.senderId] || 0) + 1;
                }
                return {
                    messages: [...state.messages, newMessage],
                    unreadMessages: newUnread,
                };
            });
        })
    },

    unsubFromMessages:()=>{
        const socket=useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    setSelectedUser: (user) => set(state => {
        const newUnread = {...state.unreadMessages};
        if (user && newUnread[user._id]) {
            delete newUnread[user._id];
        }
        return { selectedUser: user, unreadMessages: newUnread };
    }),

}));
