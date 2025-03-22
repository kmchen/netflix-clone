import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/home/Home"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>
  )
}

export default App
