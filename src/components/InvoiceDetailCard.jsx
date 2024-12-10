import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InvoiceDetailCard() {
  return (
    <div className="h-[50vh] flex-wrap overflow-auto">
      <Card className=" rounded-lg mt-2 shadow-lg">
        <CardContent>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col items-start">
              <span className="italic text-gray-500 mb-2">Tên sản phẩm</span>
              <span className="font-bold">Coca</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="italic text-gray-500 mb-2">Số lượng</span>
              <span className="font-bold">2</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="italic text-gray-500 mb-2">Đơn giá</span>
              <span className="font-bold">25,000</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="italic text-gray-500 mb-2">Thành tiền</span>
              <span className="font-bold">50,000</span>
            </div>
          </div>
          <div className="mt-4 w-1/2">
            <Input placeholder="Ghi chú" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
