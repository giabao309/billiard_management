import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TableContext } from "@/Context/TableContext";

export default function InvoiceDetailCard() {
  const {
    selectedTable,
    difference,
    setTotalAmount,
    setPlayTime,
    getInvoiceDetail,
    invoice,
    deleteOrUpdateItem,
    toast,
  } = useContext(TableContext);

  const handleDeleteItem = (invoi) => {
    if (!invoice || invoice.length === 0 || invoice.status === 1) {
      toast({
        title: "Thông báo",
        description: "Vui lòng chọn bàn trước khi thêm sản phẩm.",
        status: "warning",
      });
      return;
    } else if (selectedTable.status_id !== 2) {
      toast({
        title: "Thông báo",
        description: "Vui lòng mở bàn trước khi thêm sản phẩm.",
        status: "warning",
      });
      return;
    }

    deleteOrUpdateItem(invoice.id, invoi.service_id);
    toast({
      title: "Thông báo",
      description: `Xoa thành công ${invoi.service_id}, HD00${invoice.id}`,
      status: "success",
    });
  };

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
    return getInvoiceDetail?.reduce((total, invoice) => {
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
  }, [difference, selectedTable.price, getInvoiceDetail]);

  //Hàm thêm món

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
      {getInvoiceDetail ? (
        <div>
          {getInvoiceDetail.map((invoi) => (
            <Card className=" rounded-lg mt-2 shadow-lg">
              <CardContent>
                <div>
                  <div className="flex justify-between mt-3">
                    <div className="flex flex-col items-start">
                      <span className="italic text-gray-500 mb-2">
                        Tên sản phẩm
                      </span>
                      <span className="font-bold">{invoi.name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Số lượng
                      </span>
                      <span className="font-bold">{invoi.quantity}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">Đơn giá</span>
                      <span className="font-bold">
                        {invoi.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Thành tiền
                      </span>
                      <span className="font-bold">
                        {totalInvoiceDetail(
                          invoi.quantity,
                          invoi.price
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Button onClick={() => handleDeleteItem(invoi)}>
                        Xoá
                      </Button>
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
