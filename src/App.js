import "./App.css";

import Login from "./components/Eccomm/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Eccomm/Signup/Signup";
import Home from "./components/Eccomm/Home/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<h1>Add Product</h1>} />
      </Routes>
    </div>
  );
}

export default App;
