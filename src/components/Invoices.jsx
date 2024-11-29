import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import InvoiceDetailCard from "@/components/InvoiceDetailCard";
import { TbTransfer } from "react-icons/tb";
import { FaMoneyBill } from "react-icons/fa";
import { useGetEmployeeByID } from "@/APIs/UserApi";

export default function Invoices() {
  const branch = localStorage.getItem("branchName");
  const branch_id = localStorage.getItem("branchID");

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-x-4 items-end mb-2">
          <span className="flex items-center justify-center h-12 w-[12rem] text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
            Bàn 1 - Tầng 1
          </span>
          <span className="flex items-center justify-center h-12 px-4 text-[#2A71B0] text-xl font-bold rounded-xl bg-[#E6F0FB]">
            {branch} - {branch_id}
          </span>
        </div>

        <div className=" h-full">
          <div className="flex justify-between items-center h-12 gap-x-2">
            <span className="flex items-center justify-between px-2 h-10 w-[20rem] rounded-md bg-gray-200 ">
              Khách hàng: ... <Search className="cursor-pointer" />
            </span>
            <span className="flex items-center justify-center h-10 w-[15rem] rounded-md bg-gray-200 ">
              Trạng thái: Chưa thanh toán
            </span>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Loại bàn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pool">Lỗ</SelectItem>
                  <SelectItem value="lib">Phăng</SelectItem>
                  <SelectItem value="snooker">Snooker</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <InvoiceDetailCard />
          </div>

          <div className="mt-2 flex flex-col h-full">
            <div className="p-4">
              <span className="text-3xl">Tổng tiền: 50,000</span>
            </div>
            <div className="flex justify-around">
              <Button className="bg-[#5181F5] w-[48%] h-[3rem] text-xl">
                <TbTransfer />
                <span>Chuyển bàn</span>
              </Button>
              <Button className="bg-[#31A300] w-[48%] h-[3rem] text-xl">
                <FaMoneyBill />
                <span>Thanh Toán</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
