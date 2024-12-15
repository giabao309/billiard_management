import React from "react";
import Header from "@/components/HeaderAdmin";
import Dashboard from "@/pages/AdminPages/Dashboard";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}
