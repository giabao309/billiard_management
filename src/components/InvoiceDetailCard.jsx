import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TableContext } from "@/Context/TableContext";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTablesByBranch,
  fetchFloors,
  fetchInvoiceDetail,
} from "@/Redux/tables/tablesSlice";

export default function InvoiceDetailCard() {
  const {
    selectedTable,
    difference,
    setTotalAmount,
    setPlayTime,
    invoice,
    deleteOrUpdateItem,
    toast,
  } = useContext(TableContext);

  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store
  const invoiceDetail = useSelector((state) => state.tables.invoiceDetail);

  useEffect(() => {
    // Fetch dữ liệu ngay khi component được mount
    dispatch(fetchInvoiceDetail(invoice.id));

    // Tự động cập nhật dữ liệu mỗi 5 giây
    const interval = setInterval(() => {
      dispatch(fetchInvoiceDetail(invoice.id));
    }, 100);

    return () => clearInterval(interval); // Dọn dẹp interval khi unmount
  }, [dispatch, invoice]);

  const handleDeleteItem = (item) => {
    deleteOrUpdateItem(invoice.id, item.service_id);
    toast({
      title: "Thông báo",
      description: `Xoá thành công ${item.name}, HD00${invoice.id}`,
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
  }, [difference, selectedTable.price, invoiceDetail]);

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
      {invoiceDetail ? (
        <div>
          {invoiceDetail.map((item) => (
            <Card className=" rounded-lg mt-2 shadow-lg">
              <CardContent>
                <div>
                  <div className="flex justify-between mt-3">
                    <div className="flex flex-col items-start">
                      <span className="italic text-gray-500 mb-2">
                        Tên sản phẩm
                      </span>
                      <span className="font-bold">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Số lượng
                      </span>
                      <span className="font-bold">{item.quantity}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">Đơn giá</span>
                      <span className="font-bold">
                        {item.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="italic text-gray-500 mb-2">
                        Thành tiền
                      </span>
                      <span className="font-bold">
                        {totalInvoiceDetail(
                          item.quantity,
                          item.price
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Button onClick={() => handleDeleteItem(item)}>
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
