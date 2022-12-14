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
import BestPractices from "./component/BestPractices";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Details from "./component/Details";
import PestPage from "./component/pest";
import MarketPlace from "./component/MarketPlace";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />}/>
        <Route path="/pest" element={<PestPage />} />
        <Route path="/market" element={<MarketPlace />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
