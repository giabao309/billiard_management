import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTablesByBranch,
  fetchFloors,
  fetchInvoiceDetail,
} from "@/Redux/tables/tablesSlice";

const Invoice = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store
  const floors = useSelector((state) => state.tables.floors);
  const invoiceDetail = useSelector((state) => state.tables.invoiceDetail);

  useEffect(() => {
    // Fetch dữ liệu ngay khi component được mount
    dispatch(fetchFloors(1));
    dispatch(fetchInvoiceDetail(47));

    // Tự động cập nhật dữ liệu mỗi 5 giây
    const interval = setInterval(() => {
      dispatch(fetchFloors(1));
      dispatch(fetchInvoiceDetail(47));
    }, 100);

    return () => clearInterval(interval); // Dọn dẹp interval khi unmount
  }, [dispatch]);

  const handleDeleteItem = (item) => {
    toast({
      title: "Thông báo",
      description: `Xoá thành công ${item.name}, HD00`,
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

  return (
    <div>
      <h1>Tables</h1>

      <h1>Floors</h1>
      <ul>
        {floors.map((item, key) => (
          <li key={key}>{item.id}</li>
        ))}
      </ul>

      <div>
        {invoiceDetail ? (
          <div>
            {invoiceDetail.map((item, key) => (
              <div>{item.name}</div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Invoice;
