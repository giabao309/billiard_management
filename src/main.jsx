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

// kiểm tra user đổ route
function App() {
  const [user, setUser] = useState("1");

  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<ClientRoute />} />
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/employee/*" element={<EmployeeRoute />} />
          {/* {user == "3" && <Route path="/" element={<ClientRoute />} />}
          {user == "1" && <Route path="/admin" element={<AdminRoute />} />}
          {user == "2" && (
            <Route path="/employee/*" element={<EmployeeRoute />} />
          )} */}
        </Routes>
        <Toaster />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
