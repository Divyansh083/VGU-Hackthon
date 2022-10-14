import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import BuyerDashboard from "./BuyerDashboard";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingPage from "./component/landing";
import CompanyPage from "./component/company";
import FarmerPage from "./component/farmer";
import BestPractices from "./BestPractices";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
        <Route path="/company" element={<CompanyPage/>}/>
        <Route path="/farmer" element={<FarmerPage/>}/>
        <Route path="/bestpractices" element={<BestPractices/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
