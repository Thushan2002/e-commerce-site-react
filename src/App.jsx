import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
