import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeLayout from "@/layouts/Employee/EmployeeLayout";

export default function EmployeeRoute() {
  return (
    <Routes>
      <Route path="/user/*" element={<EmployeeLayout />} />
    </Routes>
  );
}
