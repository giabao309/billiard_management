import React, { StrictMode, useState, useEffect } from "react";
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
import AdminRoute from "@/routes/AdminRoute";

// Kiểm tra user và điều hướng đến route tương ứng
function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<ClientRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/employee/*" element={<EmployeeRoute />} />
        </Routes>
        <Toaster />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
