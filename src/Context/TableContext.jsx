import { createContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useGetFloorByBranch } from "@/APIs/BilliardApi";
import {
  useGetTableByBranch,
  useGetTableByBranchAndFloor,
  useGetTableStatus,
  useGetTableByBranchAndStatus,
  useUpdateOpenTable,
  useUpdateCloseTable,
  useGetTableAvailable,
  useUpdateTransferTable,
  useGetTableById,
} from "@/APIs/TablesApi";
import {
  useGetMenuTypes,
  useGetMenuItems,
  useGetServiceByType,
  useAddOrUpdateItemInvoice,
  useDeleteOrUpdateItemInvoice,
} from "@/APIs/ServiceApi";

import {
  useGetInvoiceByTableID,
  useGetInvoiceDetailByID,
  useGetPromotion,
  createInvoices,
  updateInvoicePayment,
} from "@/APIs/InvoicesApi";

export const TableContext = createContext({});

export const TableProvider = ({ children }) => {
  //TOAST
  const { toast } = useToast();

  //GET LOCAL
  const branchName = localStorage.getItem("branchName");
  const branch_id = localStorage.getItem("branchID");
  const employeeID = localStorage.getItem("employeeID");
  const employeeName = localStorage.getItem("employeeName");

  //SERVICES
  const { types } = useGetMenuTypes();
  const [type, setType] = useState("all");
  const { serviceByType } = useGetServiceByType(type);

  const { items } = useGetMenuItems();
  const [getItem, setGetItem] = useState(items);

  useEffect(() => {
    if (type === "all") {
      setGetItem(items);
    } else {
      setGetItem(serviceByType);
    }
  }, [type, items, serviceByType]);

  const { addOrUpdateItem } = useAddOrUpdateItemInvoice();
  const { deleteOrUpdateItem } = useDeleteOrUpdateItemInvoice();

  // TABLE
  const { floors } = useGetFloorByBranch(branch_id);
  const [floor, setFloor] = useState("all");
  const { tableByFloor } = useGetTableByBranchAndFloor(branch_id, floor);

  const { status } = useGetTableStatus();
  const [statu, setStatus] = useState("all");
  const { tableByStatus } = useGetTableByBranchAndStatus(branch_id, statu);

  const { tables } = useGetTableByBranch(branch_id);
  const [getTable, setGetTable] = useState([]);

  const { tableAvailable } = useGetTableAvailable(branch_id);
  const { transferTable } = useUpdateTransferTable();
  const [selectedTable, setSelectedTable] = useState(null);
  // const { tableByID } = useGetTableById(selectedTable?.id);

  useEffect(() => {
    if (statu === "all") {
      setGetTable(tables);
    } else {
      setGetTable(tableByStatus);
    }
  }, [statu, tables, tableByStatus]);

  useEffect(() => {
    if (floor === "all") {
      setGetTable(tables);
    } else {
      setGetTable(tableByFloor);
    }
  }, [floor, tables, tableByFloor]);

  //INVOICES
  const { openTable } = useUpdateOpenTable();
  const { closeTable } = useUpdateCloseTable();

  const { invoices } = useGetInvoiceByTableID(selectedTable?.id);
  const [invoice, setInvoice] = useState(invoices);

  const { invoiceDetail } = useGetInvoiceDetailByID(invoices?.id);
  const [getInvoiceDetail, setGetInvoiceDetail] = useState(null);

  const [totalAmount, setTotalAmount] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { promotion } = useGetPromotion();

  useEffect(() => {
    setGetInvoiceDetail(invoiceDetail);
  }, [invoiceDetail]);

  useEffect(() => {
    setInvoice(invoices);
  }, [invoices]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentDate.toLocaleDateString("en-CA");
  const timer = currentDate.toLocaleTimeString("en-GB");

  const [time, setTime] = useState(timer);

  const datetime = `${date} ${time}`;

  const isoDate = invoices?.createDate;
  const dateObj = new Date(isoDate);
  const formattedTime = dateObj.toLocaleTimeString("en-GB");

  const startTime = formattedTime; // Thời gian cố định bắt đầu
  const [difference, setDifference] = useState(null); // Kết quả tính toán

  // Hàm chuyển đổi thời gian (HH:mm:ss) thành số phút kể từ 00:00:00
  const convertToMinutes = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return (hours * 60 + minutes + seconds / 60) % 1440; // Tính số phút trong ngày (mod 1440 để đảm bảo không vượt quá 24h)
  };

  // Hàm tính sự chênh lệch giữa thời gian hiện tại và thời gian bắt đầu
  const calculateTimeDifference = (time, startTime) => {
    const timeInMinutes = convertToMinutes(time);
    const startTimeInMinutes = convertToMinutes(startTime);

    let differenceInMinutes = timeInMinutes - startTimeInMinutes;

    // Nếu difference < 0, tức là đã qua nửa đêm, tính lại sự khác biệt
    if (differenceInMinutes < 0) {
      differenceInMinutes += 1440; // Cộng 1440 phút (24h) để điều chỉnh chênh lệch
    }

    const differenceInHours = differenceInMinutes / 60;
    return differenceInHours.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  };

  // useEffect để cập nhật thời gian hiện tại mỗi giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-GB");
      setTime(currentTime); // Cập nhật time mỗi giây
    }, 1000); // Cập nhật mỗi giây

    // Cleanup khi component bị unmount
    return () => clearInterval(intervalId);
  }, []);

  // useEffect để tính toán sự chênh lệch giữa time và startTime
  useEffect(() => {
    const result = calculateTimeDifference(time, startTime);
    setDifference(result); // Cập nhật sự khác biệt mỗi khi time thay đổi
  }, [time]); // Tính toán lại khi time thay đổi

  return (
    <TableContext.Provider
      value={{
        toast,
        employeeID,
        employeeName,
        branchName,
        branch_id,
        floors,
        tables,
        types,
        items,
        selectedTable,
        setSelectedTable,
        openTable,
        closeTable,
        invoices,
        invoice,
        invoiceDetail,
        setPlayTime,
        playTime,
        setTotalAmount,
        createInvoices,
        totalAmount,
        promotion,
        date,
        time,
        formattedTime,
        datetime,
        difference,
        getTable,
        setGetTable,
        setFloor,
        status,
        setStatus,
        updateInvoicePayment,
        tableAvailable,
        transferTable,
        setType,
        getItem,
        setGetItem,
        addOrUpdateItem,
        deleteOrUpdateItem,
        getInvoiceDetail,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
