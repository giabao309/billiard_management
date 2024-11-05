import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function TableStatus() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="all-status" />
        <label
          htmlFor="all-status"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tất cả
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="available" />
        <label
          htmlFor="available"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Còn trống
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="in-use" />
        <label
          htmlFor="in-use"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Đang sử dụng
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="booked" />
        <label
          htmlFor="booked"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Đã đặt
        </label>
      </div>
    </div>
  );
}
