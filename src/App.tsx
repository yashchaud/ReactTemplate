import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "@/Packages/Login/Login";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
