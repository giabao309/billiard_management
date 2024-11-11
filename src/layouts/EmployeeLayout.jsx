import React from "react";
import HeaderEmpoyee from "@/components/HeaderEmployee";
import ManageService from "@/pages/EmployeePages/ManageService";
import FooterEmployee from "@/components/FooterEmployee";

export default function EmployeeLayout() {
  return (
    <div className="bg-[#5181F5] h-screen w-full">
      <HeaderEmpoyee />
      <ManageService />
      <FooterEmployee />
    </div>
  );
}
