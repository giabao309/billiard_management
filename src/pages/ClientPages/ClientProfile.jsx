import React from "react";
import Pic from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetCustomerByID } from "@/APIs/Manage";
import { useNavigate } from "react-router-dom";

export default function ClientInfor() {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const { customer } = useGetCustomerByID(userID);

  if (!customer) {
    return "aaaa";
  }

  const handleClickInvoice = () => {
    navigate("/invoicesView");
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full bg-blue-500 p-4 rounded-t-lg">
        <h1 className="text-white text-xl font-semibold">Thông tin cá nhân</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-lg">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 p-6 border-r">
          <div className="flex flex-col items-center gap-4">
            <img
              src={Pic}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-blue-300"
            />
            <h2 className="text-xl font-semibold">{customer.name}</h2>
            <Button className="bg-blue-500" onClick={handleClickInvoice}>
              Xem hoá đơn
            </Button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3 p-6">
          <h3 className="text-lg font-bold mb-4">Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <Input defaultValue={customer.email} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Tên</label>
              <Input defaultValue={customer.name} />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Số điện thoại</label>
              <Input defaultValue={customer.phone} />
            </div>
          </div>
          <Button className="mt-4 bg-green-500">Update</Button>
        </div>
      </div>
    </div>
  );
}
