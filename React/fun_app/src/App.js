import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Login from "./Navbar/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
