import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
<<<<<<< HEAD
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingPage from "./component/landing";
=======
import BuyerDashboard from "./BuyerDashboard";
>>>>>>> d77abb713fcf52f972ba03ea58948521288b3f4e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
          <Navbar />
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <LandingPage/>
        <Footer/>
=======
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
      </Routes>
>>>>>>> d77abb713fcf52f972ba03ea58948521288b3f4e
    </div>
  );
}

export default App;
