import React from "react";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="error">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className="btn">Back to Homepage</button>
      </div>
    </div>
  );
};

export default Error;
