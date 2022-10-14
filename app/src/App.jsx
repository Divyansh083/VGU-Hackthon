import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingPage from "./component/landing";

function App() {
  return (
    <div className="App">
          <Navbar />
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <LandingPage/>
        <Footer/>
    </div>
  );
}

export default App;
