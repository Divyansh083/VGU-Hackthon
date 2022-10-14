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


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
<<<<<<< HEAD
        <Route path="/bestpractices" element={<BestPractices/>}></Route>
=======
        <Route path="/company" element={<CompanyPage/>}/>
        <Route path="/farmer" element={<FarmerPage/>}/>
>>>>>>> 900f4e32d032e661bc20f6b563db6e47799a560f
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
