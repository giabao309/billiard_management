import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableContext } from "@/Context/TableContext";

export default function InvoiceDetailCard() {
  const {
    selectedTable,
    difference,
    invoiceDetail,
    setTotalAmount,
    setPlayTime,
  } = useContext(TableContext);

  // Hàm tính thành tiền giờ chơi
  const totalPlaytime = (time, price) => {
    return time * price;
  };

  // Hàm tính thành tiền từng món
  const totalInvoiceDetail = (quantity, price) => {
    return quantity * price;
  };

  // Hàm tính thành tiền các món chi tiết
  const calculateInvoiceDetailsTotal = () => {
    return invoiceDetail?.reduce((total, invoice) => {
      return total + totalInvoiceDetail(invoice.quantity, invoice.price);
    }, 0);
  };

  // Sử dụng useEffect để tính lại tổng tiền mỗi khi dữ liệu thay đổi
  useEffect(() => {
    // Tính tiền cho giờ chơi
    const totalPlay = totalPlaytime(difference, selectedTable.price);

    setPlayTime(totalPlay);

    // Tính tổng tiền cho các món chi tiết
    const totalInvoiceDetails = calculateInvoiceDetailsTotal();

    // Cập nhật tổng tiền
    setTotalAmount(totalPlay + totalInvoiceDetails);
  }, [difference, selectedTable.price, invoiceDetail]); // Lắng nghe sự thay đổi của các giá trị liên quan

  return (
    <div className="h-[50vh] flex-wrap overflow-auto">
      <Card className=" rounded-lg mt-2 shadow-lg">
        <CardContent>
          <div>
            <div className="flex justify-between mt-3">
              <div className="flex flex-col items-start">
                <span className="italic text-gray-500 mb-2">Tên sản phẩm</span>
                <span className="font-bold">Giờ bida</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="italic text-gray-500 mb-2">Thời gian</span>
                <span className="font-bold">{difference} Giờ</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="italic text-gray-500 mb-2">Đơn giá</span>
                <span className="font-bold">
                  {selectedTable.price.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="italic text-gray-500 mb-2">Thành tiền</span>
                <span className="font-bold">
                  {totalPlaytime(
                    difference,
                    selectedTable.price
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {invoiceDetail ? (
        <div>
          {invoiceDetail.map((invoice) => (
            <Card className=" rounded-lg mt-2 shadow-lg">
              <CardContent>
                <div>
                  <div className="flex justify-between mt-3">
                    <div className="flex flex-col items-start">
                      <span className="italic text-gray-500 mb-2">
                        Tên sản phẩm
                      </span>
                      <span className="font-bold">{invoice.name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Số lượng
                      </span>
                      <span className="font-bold">{invoice.quantity}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">Đơn giá</span>
                      <span className="font-bold">
                        {invoice.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Thành tiền
                      </span>
                      <span className="font-bold">
                        {totalInvoiceDetail(
                          invoice.quantity,
                          invoice.price
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
