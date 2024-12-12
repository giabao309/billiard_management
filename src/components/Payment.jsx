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
import { User, Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FaMoneyBill } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useGetEmployeeByID, useSearchCustomer } from "@/APIs/UserApi";

export function Payment() {
  const title = [
    { name: "Tên sản phẩm" },
    { name: "Số lượng" },
    { name: "Đơn giá" },
    { name: "Thành tiền" },
  ];

  const userID = localStorage.getItem("userID");
  const { employee } = useGetEmployeeByID(userID);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { customer } = useSearchCustomer(query);

  useEffect(() => {
    if (customer) {
      setSearchResults(customer);
    }
  }, [customer]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectCustomer = (customerName) => {
    setQuery(customerName); // Cập nhật giá trị input với tên khách hàng đã chọn
    setSearchResults([]); // Ẩn danh sách tìm kiếm
  };

  const getEmployee = (employee) => {
    if (!employee) {
      return <p>Loading...</p>;
    }
    return <p>{employee.name}</p>;
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
                    <span className="font-bold">Coca</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>2</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>25,000</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span className="font-bold">50,000</span>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex flex-col w-[12rem]">
                    <span className="font-bold">Giờ bida</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>3</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span>90,000</span>
                  </div>
                  <div className="flex flex-col w-[12rem]">
                    <span className="font-bold">180,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="mb-6 flex flex-col gap-y-6">
              <div className="flex gap-x-4">
                <span className="text-2xl">Bàn 1 - Tầng 1</span>
                <span className="text-2xl">Billiard Center Võ Duy Ninh</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="flex gap-x-2">
                  Nhân viên thanh toán: {getEmployee(employee)}
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
                        onClick={() => handleSelectCustomer(customer.name)}
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
                <span>Tổng tiền hàng</span>
                <span className="font-bold text-xl">230.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Giảm giá</span>
                <span className="font-bold text-xl">23.000 (10%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl">Tổng cộng</span>
                <span className="font-bold text-2xl">207.000</span>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms">Tiền mặt</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms">Thẻ</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms">Chuyển khoản</label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#31A300]">
            Thanh toán
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
