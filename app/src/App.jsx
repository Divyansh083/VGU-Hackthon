import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;