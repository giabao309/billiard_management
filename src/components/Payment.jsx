import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaMoneyBill } from "react-icons/fa";
import InvoiceDetailCard from "@/components/InvoiceDetailCard";

export function Payment() {
  const title = [
    { name: "Tên sản phẩm" },
    { name: "Số lượng" },
    { name: "Đơn giá" },
    { name: "Thành tiền" },
  ];
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="bg-[#31A300] w-[22rem] h-[3.5rem] text-xl text-white"
        >
          Thanh Toán <FaMoneyBill />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[85rem]">
        <DialogHeader>
          <DialogTitle>Phiếu thanh toán</DialogTitle>
        </DialogHeader>
        <div className="flex">
          <div className="w-[40%] h-[40rem]">
            <span>Hoá đơn chi tiết</span>
            <div className="flex-wrap overflow-auto">
              <div className="rounded-lg mt-2 shadow-lg">
                <div>
                  <div className="flex justify-between mt-3">
                    {title.map((tit) => (
                      <div className="flex flex-col items-start">
                        <span className="italic text-gray-500 mb-2">
                          {tit.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex flex-col items-start">
                    <span className="font-bold">Coca</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">25,000</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">50,000</span>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex flex-col items-start">
                    <span className="font-bold">Coca</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">25,000</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold">50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>tổng tiền</div>
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
