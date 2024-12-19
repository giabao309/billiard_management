import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/layouts/Admin/Dashboard";
import UserManage from "@/layouts/Admin/UserManage";
import StorageManage from "@/layouts/Admin/StorageManage";
import BranchManage from "@/layouts/Admin/BranchManage";
import BranchEachManage from "@/layouts/Admin/BranchEachManage";
import { ManageProvider } from "@/Context/ManageContext";
export default function AdminRoute() {
  return (
    <ManageProvider>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/storagemanage" element={<StorageManage />} />
        <Route path="/usermanage" element={<UserManage />} />
        <Route path="/managebranch" element={<BranchManage />} />
        <Route path="/manageeachbranch" element={<BranchEachManage />} />
      </Routes>
    </ManageProvider>
  );
}
