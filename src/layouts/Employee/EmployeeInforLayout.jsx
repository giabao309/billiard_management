import React from "react";
import HeaderEmpoyee from "@/components/HeaderEmployee";
import FooterEmployee from "@/components/FooterEmployee";
import EmployeeInfor from "@/pages/EmployeePages/EmployeeInforPage";

export default function CashierLayout() {
  return (
    <div className="bg-[#5181F5] h-screen w-full">
      <HeaderEmpoyee />
      <EmployeeInfor />
      <FooterEmployee />
    </div>
  );
}
