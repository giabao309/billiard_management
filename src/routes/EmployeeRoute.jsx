import React from "react";
import { Route, Routes } from "react-router-dom";
import CashierLayout from "@/layouts/Employee/CashierLayout";
import EmployeeInforLayout from "@/layouts/Employee/EmployeeInforLayout";

export default function EmployeeRoute() {
  return (
    <Routes>
      <Route path="/cashier/*" element={<CashierLayout />} />
      <Route path="/information/*" element={<EmployeeInforLayout />} />
    </Routes>
  );
}
