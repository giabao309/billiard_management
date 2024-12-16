import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FaMoneyBill } from "react-icons/fa";
import { TableContext } from "@/Context/TableContext";
import { useGetEmployeeByID, useSearchCustomer } from "@/APIs/UserApi";
import PrintableInvoice from "./PrintInvoices";
import CSS from "@/components/PrintInvoiceCSS";

export function Payment() {
  const {
    selectedTable,
    invoiceDetail,
    formattedTime,
    branchName,
    employeeName,
    totalAmount,
    playTime,
    difference,
    invoices,
    promotion,
  } = useContext(TableContext);

  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current;
    const newWin = window.open("");
    newWin.document.write(`
      <html>
        <head>
          <title>Hóa đơn</title>
          <style>
          ${CSS}
          </style>
        </head>
        <body class="p-8">
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    newWin.document.close();
    newWin.focus();
    newWin.print();
    newWin.close();
  };

  const title = [
    { name: "Tên sản phẩm" },
    { name: "Số lượng" },
    { name: "Đơn giá" },
    { name: "Thành tiền" },
  ];

  const totalInvoiceDetail = (quantity, price) => {
    return quantity * price;
  };

  const [selectedValue, setSelectedValue] = useState(0); // State để lưu giá trị chọn

  const handleSelectChange = (value) => {
    setSelectedValue(value); // Cập nhật giá trị khi chọn
  };

  //Hàm làm tròn
  const formatNum = (num) => {
    const rounded = num.toFixed(3);
    const roundedNumber = parseFloat(rounded);
    const finalNumber = Math.round(roundedNumber / 1000) * 1000;
    return finalNumber;
  };

  //Tính bill kèm giảm giá
  const [totalBill, setTotalBill] = useState(totalAmount);
  const totalPromotion = totalAmount - totalAmount * (selectedValue / 100);

  useEffect(() => {
    if (selectedValue === 0) {
      // Nếu không có giảm giá, giữ nguyên giá trị tổng tiền
      setTotalBill(totalAmount);
    } else {
      // Nếu có giảm giá, áp dụng và làm tròn
      setTotalBill(formatNum(totalPromotion));
    }
  }, [selectedValue, totalAmount]);

  //Tìm kiếm khách hàng
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const { customer } = useSearchCustomer(query);
  useEffect(() => {
    if (customer) {
      setSearchResults(customer);
    }
  }, [customer]);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSelectCustomer = (customerName, customerID) => {
    setQuery(customerName); // Cập nhật giá trị input với tên khách hàng đã chọn
    setSelectedCustomerId(customerID);
    setSearchResults([]); // Ẩn danh sách tìm kiếm
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="bg-[#31A300] w-[15rem] h-[3.5rem] text-xl text-white"
        >
          Thanh Toán <FaMoneyBill />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[85rem]">
        <DialogHeader>
          <DialogTitle>Phiếu thanh toán</DialogTitle>
        </DialogHeader>
        <div className="flex">
          <div className="w-[60%] h-[30rem]">
            <div className="flex gap-x-4">
              <User /> <span>Khách lẻ </span>
            </div>
            <div className="flex gap-x-4 mt-4 text-xl">
              <span>Mã hoá đơn: HD00{invoices.id}</span>
            </div>
            <div className="flex-wrap overflow-auto">
              <div className="rounded-lg mt-2 shadow-lg">
                <div>
                  <div className="flex justify-between mt-3">
                    {title.map((tit) => (
                      <div key={tit.name} className="flex flex-col w-[12rem]">
                        <span className="italic text-gray-500 mb-2">
                          {tit.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex flex-col w-[12rem]">
                    <span className="font-bold">Giờ bida</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>{difference} Giờ</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>{selectedTable.price.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span className="font-bold">
                      {playTime.toLocaleString()}
                    </span>
                  </div>
                </div>
                {invoiceDetail ? (
                  <div>
                    {invoiceDetail.map((invoice) => (
                      <div className="flex justify-between mt-3">
                        <div className="flex flex-col w-[12rem]">
                          <span className="font-bold">{invoice.name}</span>
                        </div>
                        <div className="flex flex-col w-[12rem]">
                          <span>{invoice.quantity}</span>
                        </div>
                        <div className="flex flex-col w-[12rem]">
                          <span> {invoice.price.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col w-[12rem]">
                          <span className="font-bold">
                            {totalInvoiceDetail(
                              invoice.quantity,
                              invoice.price
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="w-[35%]">
            <div className="mb-6 flex flex-col gap-y-6">
              <div className="flex gap-x-4">
                <span className="text-2xl">{selectedTable.name}</span>
                <span className="text-2xl">{branchName}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="flex gap-x-2">
                  Nhân viên thanh toán: {employeeName}
                </span>
              </div>
              <div className="flex items-center gap-x-2 relative">
                <span className="w-[10rem]">Khách hàng: </span>
                <Input
                  type="text"
                  placeholder="Nhập Email hoặc SĐT"
                  value={query}
                  onChange={handleChange}
                />
                {query && searchResults.length > 0 && (
                  <div className="absolute top-10 bg-white border shadow-md max-h-40 overflow-y-auto mt-1 w-[calc(100%+2rem)]">
                    {searchResults.map((customer) => (
                      <div
                        key={customer.id}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleSelectCustomer(customer.name, customer.id)
                        }
                      >
                        <span>{customer.name}</span>
                        {" | "}
                        <span>{customer.email}</span>
                        {" | "}
                        <span>{customer.numberphone}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex justify-between items-center">
                <span>Tổng tiền:</span>
                <span className="font-bold text-xl">
                  {totalAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Giảm giá:</span>
                <Select
                  value={selectedValue}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Giảm giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {promotion.map((promo) => (
                        <SelectItem key={promo.value} value={promo.value}>
                          {promo.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl">Tổng cộng</span>
                <span className="font-bold text-2xl">
                  {totalBill.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex justify-around mt-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms">Tiền mặt</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms">Chuyển khoản</label>
              </div>
            </div>
          </div>
          <div className="hidden">
            <PrintableInvoice ref={printRef} />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-gray-200 text-black hover:text-white"
            onClick={handlePrint}
          >
            In hoá đơn
          </Button>
          <Button
            type="submit"
            className="bg-[#31A300] hover:bg-gray-100 hover:text-black"
          >
            Thanh toán
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
