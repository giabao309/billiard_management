import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "@/layouts/Client/ClientLayout";
import ClientLayoutLogin from "@/layouts/Client/ClientLayoutLogin";

export default function ClientRoute() {
  return (
    <Routes>
      <Route path="/*" element={<ClientLayout />} />
      <Route path="/client/*" element={<ClientLayoutLogin />} />
    </Routes>
  );
}
