import React from "react";
import Pic from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";

export default function EmployeeInfor() {
  const menuItems = [
    { title: "Email" },
    { title: "Tên" },
    { title: "Số điện thoại" },
    { title: "Chi nhánh làm việc" },
    { title: "Ca làm việc" },
    { title: "Lương" },
  ];

  return (
    <div className="w-full bg-white flex gap-x-4 p-4">
      <img src={Pic} className="w-32 h-32 rounded-full border-[10px]"></img>

      <div className="flex gap-x-16 justify-center items-center">
        <div className="flex flex-col gap-y-4">
          {menuItems.map((item) => (
            <p className="p-2 border-[1px] border-white">{item.title}</p>
          ))}
        </div>

        <div className="flex flex-col gap-y-4 w-96">
          <p className="p-2 border-[1px] rounded-md">giabao@gmail.com</p>
          <p className="p-2 border-[1px] rounded-md">Gia Bảo</p>
          <p className="p-2 border-[1px] rounded-md">0898387684</p>
          <p className="p-2 border-[1px] rounded-md">
            Billiard Center Võ Duy Ninh
          </p>
          <p className="p-2 border-[1px] rounded-md">Ca sáng</p>
          <p className="p-2 border-[1px] rounded-md">9,000,000</p>
        </div>
      </div>
    </div>
  );
}
