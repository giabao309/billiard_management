import React from "react";
import Pic from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { useGetEmployeeByID } from "@/APIs/UserApi";

export default function EmployeeInfor() {
  const userID = localStorage.getItem("userID");
  const { employee } = useGetEmployeeByID(userID);

  const getEmployee = (employee) => {
    if (!employee) {
      return <p>Loading...</p>;
    }
    return (
      <div className="flex flex-col gap-y-4 w-96">
        <p className="p-2 border-[1px] rounded-md">{employee.email}</p>
        <p className="p-2 border-[1px] rounded-md">{employee.name}</p>
        <p className="p-2 border-[1px] rounded-md">{employee.phone}</p>
        <p className="p-2 border-[1px] rounded-md">{employee.branch}</p>
        <p className="p-2 border-[1px] rounded-md">{employee.shift}</p>
        <p className="p-2 border-[1px] rounded-md">{employee.salary}</p>
      </div>
    );
  };
  const menuItems = [
    { title: "Email" },
    { title: "Tên" },
    { title: "Số điện thoại" },
    { title: "Chi nhánh làm việc" },
    { title: "Ca làm việc" },
    { title: "Lương" },
  ];

  return (
    <div className="w-full bg-white flex flex-col gap-x-4 p-4">
      <div className="w-[40rem] flex flex-col items-center justify-center">
        <img src={Pic} className="w-32 h-32 rounded-full border-[10px]"></img>
        <div className="w-full flex gap-x-4 p-4">
          <div className="flex gap-x-16 justify-center items-center">
            <div className="flex flex-col gap-y-4">
              {menuItems.map((item) => (
                <p className="p-2 border-[1px] border-white">{item.title}:</p>
              ))}
            </div>
          </div>
          {getEmployee(employee)}
        </div>
      </div>
    </div>
  );
}
