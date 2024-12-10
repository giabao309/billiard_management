import React from "react";
import img_bida from "@/assets/imgbida.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MdLocationPin } from "react-icons/md";
const districts = [
  {
    district: "Quận Gò Vấp",
    branches: [
      "62 Dương Quảng Hàm - Billiards Center",
      "48 Lê Lợi - Billiards Center",
      "144 Nguyễn Văn Lượng - Billiards Center",
    ],
  },
  {
    district: "Quận Bình Thạnh",
    branches: [
      "15 Võ Duy Ninh - Billiards Center",
      "360 Lê Quang Định - Billiards Center",
      "99 Nguyễn Hữu Cảnh - Billiards Center",
    ],
  },
  {
    district: "Quận Tân Bình",
    branches: ["662 Âu Cơ - Billiards Center", "72 Ba Vân - Billiards Center"],
  },
];

export default function ClientBookingBillard() {
  const handleBranchClick = (branch) => {
    // Giả định điều hướng tới trang đặt bàn
    alert(`Bạn đã chọn: ${branch}`);
    // Ví dụ: sử dụng react-router để điều hướng
    // navigate(`/booking/${branch}`);
  };
  return (
    <div className="relative">
      {/* Hình nền */}
      <img
        src={img_bida}
        className="w-full object-cover h-[1000px] brightness-[0.7]"
        alt="Billiards Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Tiêu đề */}
        <h1 className="text-white text-4xl font-bold mb-6 tracking-wider drop-shadow-lg">
          Chọn Chi Nhánh
        </h1>

        {/* Danh sách chi nhánh */}
        <div className="w-[90%] max-w-[900px] max-h-[400px] bg-white rounded-lg shadow-2xl overflow-y-scroll p-5">
          {districts.map((district, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {district.district}
              </h2>
              <div className="space-y-3">
                {district.branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-200"
                    onClick={() => handleBranchClick(branch)}
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {branch}
                    </span>
                    <MdLocationPin className="w-6 h-6 text-red-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
