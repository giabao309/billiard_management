import React from "react";
import Header from "@/components/Header";
import ManageService from "@/pages/EmployeePages/ManageService";

export default function EmployeeLayout() {
  return (
    <div>
      <Header />
      <ManageService />
    </div>
  );
}
