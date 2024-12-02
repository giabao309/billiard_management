import React from "react";
import HeaderEmpoyee from "@/components/HeaderEmployee";
import FooterEmployee from "@/components/FooterEmployee";
import EmployeeInfor from "@/pages/EmployeePages/EmployeeInforPage";

export default function EmployerInfo() {
  return (
    <div className="h-screen">
      <HeaderEmpoyee />
      <EmployeeInfor />
    </div>
  );
}
