import React, { useContext } from "react";
import img_bida from "@/assets/imgbida.png";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BookingConText } from "@/Context/BookingContext";

export default function ClientBookingBillard() {
  const { setSelectedBranchID, selectedBranchID } = useContext(BookingConText);

  const navigate = useNavigate();
  const handleBranchClick = (branch_id) => {
    setSelectedBranchID(branch_id);
    navigate(`/inforbooking`);
  };
  React.useEffect(() => {
    console.log(selectedBranchID);
  }, [selectedBranchID]);
  return (
    <div className="relative">
      {/* Hình nền */}
      <img
        src={img_bida}
        className="w-full object-cover h-[1000px] brightness-50"
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
          <div className="mb-8 last:mb-0">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Quận Bình Thạnh
            </h2>
            <div className="space-y-3">
              <div
                className="flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-200"
                onClick={() => handleBranchClick(1)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Billiard Center Võ Duy Ninh
                </span>
                <MdLocationPin className="w-6 h-6 text-red-500" />
              </div>
              <div
                className="flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-200"
                onClick={() => handleBranchClick(2)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Billiard Center Lê Quang Định
                </span>
                <MdLocationPin className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>
          <div className="mb-8 last:mb-0">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Quận Gò Vấp
            </h2>
            <div className="space-y-3">
              <div
                className="flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-200"
                onClick={() => handleBranchClick(3)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Billiard Center Đặng Thuỳ Trâm
                </span>
                <MdLocationPin className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
