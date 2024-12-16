import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Payment } from "@/components/Payment";
import { TransferTable } from "@/components/TransferTable";
import { TableContext } from "@/Context/TableContext";
import InvoiceDetailCard from "@/components/InvoiceDetailCard";
import { createInvoices } from "@/APIs/InvoicesApi";

export default function Invoices() {
  const {
    selectedTable,
    setSelectedTable,
    openTable,
    invoices,
    branchName,
    date,
    time,
    formattedTime,
    branch_id,
    employeeID,
    datetime,
    totalAmount,
  } = useContext(TableContext);

  const handleOpenTable = async () => {
    if (selectedTable && selectedTable.id) {
      try {
        const updatedTable = await openTable(selectedTable.id);
        const createInvoice = await createInvoices(
          branch_id,
          employeeID,
          selectedTable.id,
          datetime
        );
        window.location.reload();
        setSelectedTable(updatedTable);
      } catch (error) {
        console.error("Error opening table:", error);
      }
    }
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
              {branchName}
            </span>
          </div>

          <div className="flex gap-x-2 items-end mb-2">
            <span className="flex items-center justify-center h-12 px-4 text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
              {date}
            </span>
            <span className="flex items-center justify-center h-12 px-4 text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
              {time}
            </span>
          </div>

          {selectedTable.status_id === 2 && invoices ? (
            <div className="h-full">
              <div className="flex justify-start items-center h-12 gap-x-2">
                <span className="flex items-center justify-between px-2 h-10 rounded-md bg-gray-200 ">
                  Hoá đơn: HD00{invoices.id}
                </span>
                <span className="flex items-center px-2 h-10 rounded-md bg-gray-200 ">
                  Giờ bắt đầu: {formattedTime}
                </span>
                <span className="flex items-center justify-center h-10 px-2 rounded-md bg-gray-200 ">
                  Loại bàn: {selectedTable.type}
                </span>
              </div>

              <div>
                {invoices ? <div></div> : "ko co hoa don"}
                <InvoiceDetailCard />
              </div>

              <div className="mt-2 p-2 rounded-sm flex flex-col h-full bg-gray-200">
                <div className="p-4">
                  <span className="text-3xl">
                    Tổng tiền: {totalAmount.toLocaleString()}
                  </span>
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
              <div className="mb-8">
                <span>Trạng thái: </span>{" "}
                <span className="font-bold text-xl p-4 rounded-lg">
                  {selectedTable.status}
                </span>
              </div>

              <Button
                className="w-[12rem] h-[4rem] bg-[#5181F5] text-xl"
                onClick={handleOpenTable} // Gọi hàm mở bàn khi nhấn
              >
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
