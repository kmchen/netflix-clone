import axios from "axios";
import toast from "react-hot-toast"
import {create} from "zustand";
import { devtools } from 'zustand/middleware'

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: false,
    signup: async (credentials) => {
        try {
           set({isSigningUp: true})
           const resp = await axios.post("/api/v1/auth/signup", credentials) 
           const {user} = resp.data;
           toast.success("Account created successfully")
           set({user, isSigningUp: false})
        } catch (error) {
           toast.error(error.response.data.message || "Sign up failed") 
           set({user: null, isSigningUp: true})
        }
    },
    login: async () => {},
    logout: async () => {},
    authCheck: async () => {
        set({isCheckingAuth: true});
        try {
            const resp = await axios.get("/api/v1/auth/authcheck");
            const {user} = resp.data;
            set({user, isCheckingAuth: false});
        } catch (error) {
           toast.error(error.response.data.message || "Sign up failed") 
           set({isCheckingAuth: false});
        }
    },
}));