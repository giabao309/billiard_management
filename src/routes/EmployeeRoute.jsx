import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeLayout from "@/layouts/EmployeeLayout";

export default function EmployeeRoute() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLayout />} />
    </Routes>
  );
}
