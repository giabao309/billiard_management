import React from "react";
import ManageRoomAndTable from "@/pages/AdminPages/ManageRoomAndTable";
import ManageStaf from "@/pages/AdminPages/ManageStaf";
import Storage from "@/pages/AdminPages/Storage";
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
