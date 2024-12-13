import React from "react";
import Header from "@/components/HeaderAdmin";
import Dashboard from "@/pages/AdminPages/Dashboard";
import Test from "@/components/TestAPI";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <Test />
    </div>
  );
}
