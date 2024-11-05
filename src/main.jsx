import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import EmployeeRoute from "@/routes/EmployeeRoute";
import ClientRoute from "@/routes/ClientRoute";

// kiểm tra user đổ route
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ClientRoute />
      <Toaster />
    </Router>
  </StrictMode>
);
