import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Post from "./components/post/Post";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}
export default App;
