import React from "react";
import Pic from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetEmployeeByID } from "@/APIs/UserApi";

export default function EmployeeInfor() {
  const userID = localStorage.getItem("userID");
  const { employee } = useGetEmployeeByID(userID);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-100">
      <div className="flex items-center justify-between w-full bg-blue-500 p-4 rounded-t-lg">
        <h1 className="text-white text-xl font-semibold">Thông tin cá nhân</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-lg">
        <div className="w-full lg:w-1/3 p-6 border-r">
          <div className="flex flex-col items-center gap-4">
            <img
              src={Pic}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-blue-300"
            />
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-gray-500">{employee.branch}</p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 p-6 h-screen">
          <h3 className="text-lg font-bold mb-4">Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <Input defaultValue={employee.email} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Tên</label>
              <Input defaultValue={employee.name} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Số điện thoại</label>
              <Input defaultValue={employee.phone} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">
                Chi nhánh làm việc
              </label>
              <Input readOnly defaultValue={employee.branch} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Ca làm việc</label>
              <Input readOnly defaultValue={employee.shift} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Lương</label>
              <Input
                readOnly
                defaultValue={employee.salary.toLocaleString("vi-VN")}
              />
            </div>
          </div>
          <Button className="mt-4">Update</Button>
        </div>
      </div>
    </div>
  );
}
