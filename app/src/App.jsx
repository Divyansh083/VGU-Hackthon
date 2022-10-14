import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import BuyerDashboard from "./BuyerDashboard";
import BestPractices from "./BestPractices";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
        <Route path="/bestpractices" element={<BestPractices/>}></Route>
      </Routes>
    </div>
  );
}

export default App;