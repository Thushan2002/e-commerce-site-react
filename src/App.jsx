import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
