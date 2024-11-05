import React from "react";
import HeaderEmpoyee from "@/components/HeaderEmployee";
import ManageService from "@/pages/EmployeePages/ManageService";

export default function EmployeeLayout() {
  return (
    <div>
      <HeaderEmpoyee />
      <ManageService />
    </div>
  );
}
