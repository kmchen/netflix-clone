import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: false,
  isLogingOut: false,
  isLogingIn: false,
  signup: async (credentials) => {
    try {
      set({ isSigningUp: true });
      const resp = await axios.post("/api/v1/auth/signup", credentials);
      const { user } = resp.data;
      toast.success("Account created successfully");
      set({ user, isSigningUp: false });
    } catch (error) {
      toast.error(error.response.data.message || "Sign up failed");
      set({ user: null, isSigningUp: true });
    }
  },
  login: async (credentials) => {
    try {
      set({ isLogingIn: true });
      const resp = await axios.post("/api/v1/auth/login", credentials);
      const { user } = resp.data;
      toast.success("Login successfully");
      set({ user, isLogingIn: false });
    } catch (error) {
      toast.error(error.response.data.message || "Login failed");
      set({ user: null, isLogingIn: false });
    }
  },
  logout: async () => {
    try {
      set({ isLogingOut: true });
      await axios.post("/api/v1/auth/logout");
      toast.success("Logout successfully");
      set({ user: null, isLogingOut: false });
    } catch (error) {
      toast.error(error.response.data.message || "Logout failed");
      set({ user: null, isSigningUp: true });
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const resp = await axios.get("/api/v1/auth/authcheck");
      const { user } = resp.data;
      set({ user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false });
    }
  },
}));
