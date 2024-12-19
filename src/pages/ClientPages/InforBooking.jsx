import React, { useContext } from "react";
import img_table from "@/assets/table.png";
import img_background from "@/assets/imgbida.png";
import { BookingConText } from "@/Context/BookingContext";

export default function InforBooking() {
  const { branch } = useContext(BookingConText);
  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Background Image */}
      <img
        src={img_background}
        alt="Background"
        className="w-full object-cover h-screen"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-5xl w-full px-4 py-8 bg-white shadow-lg rounded-lg">
          <div className="text-center bg-blue-500 text-white py-4 rounded-t-lg">
            <h1 className="text-lg font-bold">
              Chi Nhánh Pool Billiard Bình Thạnh - 0898.387.684
            </h1>
          </div>

          <div className="grid grid-cols-3 bg-white shadow-md rounded-b-lg divide-x divide-gray-200">
            {/* Column 1: Table Availability */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">Số lượng bàn còn trống</h2>

              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={img_table}
                      alt="Table"
                      className="w-12 h-12 mr-4"
                    />
                    <span className="font-semibold">Bàn bida Lỗ</span>
                  </div>
                  <span className="text-blue-500 font-bold">4 bàn</span>
                </div>

                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={img_table}
                      alt="Table"
                      className="w-12 h-12 mr-4"
                    />
                    <span className="font-semibold">Bàn bida Phẳng</span>
                  </div>
                  <span className="text-blue-500 font-bold">1 bàn</span>
                </div>
              </div>
            </div>

            {/* Column 2: Booking Information */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">
                Thông tin khách đặt bàn
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Họ và tên:</span>
                  <input
                    type="text"
                    value="Gia Bảo"
                    className="w-full max-w-xs bg-gray-200 px-3 py-2 rounded"
                    readOnly
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Số điện thoại:</span>
                  <input
                    type="text"
                    value="0898387684"
                    className="w-full max-w-xs bg-gray-200 px-3 py-2 rounded"
                    readOnly
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Email:</span>
                  <input
                    type="text"
                    value="giabao@gmail.com"
                    className="w-full max-w-xs bg-gray-200 px-3 py-2 rounded"
                    readOnly
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Số lượng bàn:</span>
                  <input
                    type="text"
                    value="1"
                    className="w-full max-w-xs bg-gray-200 px-3 py-2 rounded"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Column 3: Confirmation */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">Xác nhận thông tin</h2>

              <div className="space-y-4">
                <p>
                  <strong>Họ và tên:</strong> Gia Bảo
                </p>
                <p>
                  <strong>Số điện thoại:</strong> 0898387684
                </p>
                <p>
                  <strong>Email:</strong> giabao@gmail.com
                </p>
                <p>
                  <strong>Số lượng bàn:</strong> 1 bàn bida Lỗ
                </p>

                <p className="text-sm text-gray-600">
                  Lưu ý: Chúng tôi chỉ giữ bàn 30 phút sau thời gian đặt bàn.
                  Sau 30 phút Quý Khách không đến lấy bàn thì bàn sẽ bị huỷ. Cảm
                  ơn Quý Khách.
                </p>

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
                  Đặt bàn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
