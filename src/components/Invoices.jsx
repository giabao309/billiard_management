import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import InvoiceDetailCard from "@/components/InvoiceDetailCard";
import { Payment } from "@/components/Payment";
import { TransferTable } from "@/components/TransferTable";

export default function Invoices({ selectedTable }) {
  const branch = localStorage.getItem("branchName");
  const employeeID = localStorage.getItem("employeeID");

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Cập nhật ngày giờ mỗi giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Dọn dẹp interval khi component bị hủy
    return () => clearInterval(intervalId);
  }, []);

  // Hàm định dạng ngày giờ
  const formatDate = (date) => {
    return date.toLocaleString(); // Chuyển đổi đối tượng Date thành chuỗi ngày giờ theo múi giờ hiện tại
  };

  return (
    <div>
      {selectedTable ? (
        <div className="flex flex-col">
          <div className="flex gap-x-2 items-end mb-2">
            <span className="flex items-center justify-center h-12 px-4 text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
              {selectedTable.name}
            </span>
            <span className="flex items-center justify-center h-12 px-4 text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
              {branch}
            </span>
          </div>

          {selectedTable.status_id === 2 ? (
            <div className=" h-full">
              <div className="flex justify-start items-center h-12 gap-x-2">
                <span className="flex items-center justify-between px-2 h-10 rounded-md bg-gray-200 ">
                  Hoá đơn: HD001
                </span>
                <span className="flex items-center px-2 h-10 w-[15rem] rounded-md bg-gray-200 ">
                  Giờ bắt đầu:
                </span>
                <span className="flex items-center justify-center h-10 px-2 rounded-md bg-gray-200 ">
                  Loại bàn: {selectedTable.type}
                </span>
              </div>

              <div>
                <InvoiceDetailCard />
              </div>

              <div className="mt-2 p-2 rounded-sm flex flex-col h-full bg-gray-200">
                <div className="p-4">
                  <span className="text-3xl">Tổng tiền: 50,000</span>
                </div>
                <div className="flex justify-around">
                  <div className="flex items-center justify-center w-[30%]">
                    <TransferTable />
                  </div>
                  <div className="flex items-center justify-center w-[30%]">
                    <Payment />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4 items-center justify-center mt-12">
              <div>
                <span>Trạng thái: </span>{" "}
                <span className="font-bold text-xl">
                  {selectedTable.status}
                </span>
              </div>

              <Button className="w-[12rem] h-[4rem] bg-[#5181F5] text-xl">
                Mở bàn
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-red-500 text-center font-semibold">
          Chọn 1 bàn để xem chi tiết
        </div>
      )}
    </div>
  );
}
