import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginRegister from "./pages/loginpage.jsx";
import Signup from "./pages/signuppage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root path to the login page */}
        <Route path="/" element={<Navigate to="/LoginRegister" />} />
        
        {/* Define the Login and Signup routes */}
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;