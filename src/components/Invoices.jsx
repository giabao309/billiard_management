import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Payment } from "@/components/Payment";
import { TransferTable } from "@/components/TransferTable";
import { TableContext } from "@/Context/TableContext";
import InvoiceDetailCard from "@/components/InvoiceDetailCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchTablesByBranch, fetchInvoices } from "@/Redux/tables/tablesSlice";

export default function Invoices() {
  const {
    selectedTable,
    setSelectedTable,
    openTable,
    branchName,
    date,
    time,
    formattedTime,
    branch_id,
    employeeID,
    datetime,
    totalAmount,
    createInvoices,
    invoice,
    invoicea,
    selectedTableId,
  } = useContext(TableContext);

  const dispatch = useDispatch();
  const invoiceb = useSelector((state) => state.tables.invoices);

  useEffect(() => {
    dispatch(fetchInvoices(selectedTableId));

    const interval = setInterval(() => {
      dispatch(fetchInvoices(selectedTableId));
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch, selectedTableId]);

  const fetchUpdatedTable = async (table_id) => {
    try {
      const response = await axios.post("http://localhost:5000/api/tables/id", {
        table_id,
      });
      const updatedTable = await response.data;

      console.log(updatedTable);
      setSelectedTable(updatedTable);
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin bàn:", error);
    }
  };

  const handleOpenTable = async () => {
    if (selectedTable && selectedTable.id) {
      await openTable(selectedTable.id);
      await createInvoices(branch_id, employeeID, selectedTable.id, datetime);
      await fetchUpdatedTable(selectedTable.id);
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

          {invoice && invoice.status === 2 ? (
            <div className="h-full">
              <div className="flex justify-start items-center h-12 gap-x-2">
                <span className="flex items-center justify-between px-2 h-10 rounded-md bg-gray-200 ">
                  Hoá đơn: HD00{invoice.id}
                </span>
                <span className="flex items-center px-2 h-10 rounded-md bg-gray-200 ">
                  Giờ bắt đầu: {formattedTime}
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
                  <span className="text-3xl">
                    Tổng tiền: {totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-around">
                  <div className="flex items-center justify-center w-[30%]">
                    <TransferTable />
                  </div>
                  <div className="flex items-center justify-center w-[30%]">
                    <Payment invoivoi={invoiceb} />
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
                onClick={() => handleOpenTable()}
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
