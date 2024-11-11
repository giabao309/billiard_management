import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "@/layouts/ClientLayout";

export default function EmployeeRoute() {
  return (
    <Routes>
      <Route path="/*" element={<ClientLayout />} />
    </Routes>
  );
}
