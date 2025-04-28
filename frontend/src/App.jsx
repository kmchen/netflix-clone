import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";
import Footer from "./pages/components/Footer";
import { useAuthStore } from "./store/authUsers";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./pages/Watch";
function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
  }, []);
  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center h-full bg-black">
          <Loader className="animate-spin size-10 text-red-600"></Loader>
        </div>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        ></Route>
        <Route path="/watch/:id" element={<WatchPage />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
