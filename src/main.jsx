import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import EmployeeRoute from "@/routes/EmployeeRoute";
import ClientRoute from "@/routes/ClientRoute";
// import AdminRoute from "@/routes/AdminRoute";

// kiểm tra user đổ route
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ClientRoute />
      <EmployeeRoute />
      {/* <AdminRoute /> */}
      <Toaster />
    </Router>
  </StrictMode>
);
