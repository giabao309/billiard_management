import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import EmployeeRoute from "@/routes/EmployeeRoute";
import ClientRoute from "@/routes/ClientRoute";
import AdminRoute from "@/routes/AdminRoute";
import { Provider } from "react-redux";
import store from "@/Redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
