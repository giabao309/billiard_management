import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/layouts/Admin/Dashboard";
import UserManage from "@/layouts/Admin/UserManage";
import StorageManage from "@/layouts/Admin/StorageManage";

export default function AdminRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/storagemanage" element={<StorageManage />} />
      <Route path="/usermanage" element={<UserManage />} />
    </Routes>
  );
}
