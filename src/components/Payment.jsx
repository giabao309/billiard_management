import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FaMoneyBill } from "react-icons/fa";
import { TableContext } from "@/Context/TableContext";
import { useSearchCustomer } from "@/APIs/UserApi";
import PrintableInvoice from "./PrintInvoices";
import CSS from "@/components/PrintInvoiceCSS";

export function Payment() {
  const {
    selectedTable,
    invoiceDetail,
    branchName,
    employeeName,
    totalAmount,
    playTime,
    difference,
    invoices,
    promotion,
    closeTable,
    updateInvoicePayment,
    toast,
  } = useContext(TableContext);

  const title = [
    { name: "Tên sản phẩm" },
    { name: "Số lượng" },
    { name: "Đơn giá" },
    { name: "Thành tiền" },
  ];

  //IN HOÁ ĐƠN
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

  //HÀM TÍNH TIỀN
  const totalInvoiceDetail = (quantity, price) => {
    return quantity * price;
  };
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedPromoId, setSelectedPromoId] = useState(6);
  const handleSelectChange = (value) => {
    setSelectedValue(value);

    // Tìm promo.id tương ứng với value đã chọn
    const selectedPromo = promotion.find((promo) => promo.value === value);
    if (selectedPromo) {
      setSelectedPromoId(selectedPromo.id); // Cập nhật promo.id
    } else {
      setSelectedPromoId(null); // Xóa giá trị nếu không tìm thấy
    }
  };
  useEffect(() => {
    setSelectedPromoId(6);
  }, []);

  const formatNum = (num) => {
    const rounded = num.toFixed(3);
    const roundedNumber = parseFloat(rounded);
    const finalNumber = Math.round(roundedNumber / 1000) * 1000;
    return finalNumber;
  };
  const [totalBill, setTotalBill] = useState(totalAmount);
  const totalPromotion = totalAmount - totalAmount * (selectedValue / 100);
  useEffect(() => {
    if (selectedValue === 0) {
      setTotalBill(totalAmount);
    } else {
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
  }, [customer, selectedCustomerId]);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSelectCustomer = (customerName, customerID) => {
    setQuery(customerName); // Cập nhật giá trị input với tên khách hàng đã chọn
    setSelectedCustomerId(customerID);
    setSearchResults([]); // Ẩn danh sách tìm kiếm
  };

  //Hàm Thanh toán
  const handlePayment = async () => {
    await closeTable(selectedTable.id);
    await updateInvoicePayment(
      selectedCustomerId,
      difference,
      selectedPromoId,
      totalBill,
      invoices.id
    );
    toast({
      title: "Thông báo",
      description: `Thanh toán thành công`,
    });
    setTimeout(() => {
      window.location.reload();
    }, 800);
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
              <User /> <span>Khách lẻ</span>
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
                        <SelectItem key={promo.id} value={promo.value}>
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
          <DialogClose>
            <Button
              type="submit"
              className="bg-[#31A300] hover:bg-gray-100 hover:text-black"
              onClick={handlePayment}
            >
              Thanh toán
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
