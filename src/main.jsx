import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import EmployeeRoute from "@/routes/EmployeeRoute";
import ClientRoute from "@/routes/ClientRoute";
// import AdminRoute from "@/routes/AdminRoute";

// kiểm tra user đổ route
function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<ClientRoute />} />
          <Route path="/employee/*" element={<EmployeeRoute />} />
        </Routes>
        <Toaster />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
