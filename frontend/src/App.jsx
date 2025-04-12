import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/home/Home"
import Footer from "./pages/components/Footer"
import { useAuthStore } from "./store/authUsers";
import { useEffect } from "react";

function App() {
  const { authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
  }, [])
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Routes>
      <Footer/>
      <Toaster />
    </>
  )
}

export default App
