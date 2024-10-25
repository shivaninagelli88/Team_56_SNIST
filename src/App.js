import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Events from "./Component/Pages/Events";
import About from "./Component/Pages/About";
import FAQs from "./Component/Pages/FAQs";
import AdminDashboard from "./Component/Pages/AdminDashboard";
import Gallery from "./Component/Pages/Gallery";
import Login from "./Component/Pages/Login";
import Feedback from "./Component/Pages/Feedback";
import Signup from "./Component/Pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
