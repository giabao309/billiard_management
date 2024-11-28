import React from "react";
import ManageRoomAndTable from "@/pages/AdminPages/ManageRoomAndTable";
import ManageStaf from "@/pages/AdminPages/ManageStaf";
import Storage from "@/pages/AdminPages/Storage";
import Header from "@/components/HeaderAdmin";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <ManageStaf />
    </div>
  );
}
