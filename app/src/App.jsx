import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import BuyerDashboard from "./BuyerDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
