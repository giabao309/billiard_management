import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/logo.png";
import video from "@/assets/videobida.mp4";
import { BadgeCheck } from "lucide-react";
import { useGetHomePage } from "@/APIs/HomePageApi";

export default function ClientSection() {
  //FIRST PAGE
  const { data: data1 } = useGetHomePage("firstPage");

  //CHAT LUONG SAN PHAM
  const { data: data2 } = useGetHomePage("chatluongsanpham");

  return (
    <div className="bg-gray-50 pb-10 w-full">
      {data1.map((item, index) => (
        <div className="relative w-full h-[900px]">
          <img
            src={item.img}
            className="w-full h-full object-cover brightness-50"
            alt="Billiards hall"
          />

          <div className="absolute inset-0 flex items-center justify-start ml-10">
            <div className="text-white space-y-4 ">
              <p className="w-[700px] mx-auto text-2xl text-left font-bold">
                {item.description}
              </p>
              <Button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg p-6"
                onClick={() => (window.location.href = "/booking")}
              >
                ĐẶT BÀN NGAY
              </Button>
            </div>
          </div>
        </div>
      ))}
      {/*Video */}
      <div className="bg-gray-50 pb-10 w-full">
        {/* Video Section */}
        <div className="relative w-full h-screen overflow-hidden">
          <video
            src={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      {/* Pricing Section */}
      <div id="section" className="mt-10 mx-auto max-w-5xl px-4 md:px-6 h-auto">
        <h2 className="text-center text-3xl font-bold text-[#6ec1e4] mb-6">
          GIÁ GIỜ CHƠI BILLIARDS
        </h2>
        <p className="text-center text-lg font-medium text-gray-500 mb-10">
          ÁP DỤNG MỌI KHUNG GIỜ, MỌI CHI NHÁNH BILLIARDS CENTTER
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Libre & Pool Pricing Card */}
          <Card className="p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 rounded">
              BẢNG GIÁ LIBRE & POOL
            </h3>
            <p className="text-5xl text-center text-red-600 font-bold mt-4">
              90.000 <span className="text-lg">đ/h</span>
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Mở 24/7, có máy lạnh, chơi văn minh</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Luôn đảm bảo chất lượng bàn, vải</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>
                  Không giới hạn số người chơi, không bắt buộc mua đồ uống
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Giữ xe miễn phí - Vệ sinh găng tay, bi liên tục</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Luôn lắng nghe hội viên, có phòng không hút thuốc</span>
              </li>
            </ul>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-6 w-full py-2 "
              onClick={() => (window.location.href = "/booking")}
            >
              ĐẶT BÀN NGAY
            </Button>
          </Card>

          {/* Carom Pricing Card */}
          <Card className="p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 rounded">
              BẢNG GIÁ SNOOKER
            </h3>
            <p className="text-5xl text-center text-red-600 font-bold mt-4">
              120.000 <span className="text-lg">đ/h</span>
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Mở 24/7, có máy lạnh, chơi văn minh</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Luôn đảm bảo chất lượng bàn, vải</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>
                  Không giới hạn số người chơi, không bắt buộc mua đồ uống
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Giữ xe miễn phí - Vệ sinh găng tay, bi liên tục</span>
              </li>
              <li className="flex items-center space-x-2">
                <BadgeCheck className="h-6 w-6 text-green-500" />
                <span>Luôn lắng nghe hội viên, có phòng không hút thuốc</span>
              </li>
            </ul>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-6 w-full py-2"
              onClick={() => (window.location.href = "/booking")}
            >
              ĐẶT BÀN NGAY
            </Button>
          </Card>
        </div>
      </div>
      {/* New Product Detail Section */}\{" "}
      <div
        id="section1"
        className="mx-auto px-4 md:px-6 mt-8 bg-[#6ec1e4] w-full py-8"
      >
        <h1 className="text-center text-2xl font-bold mb-8">
          <span className="text-white mr-2"> CHẤT LƯỢNG SẢN PHẨM</span>
          <span className="text-black">BÀN BILLIARDS CENTER</span>
        </h1>
        {/* Detail Section 1 */}
        {data2.map((item, index) => (
          <div className="grid md:grid-cols-2 gap-4 items-center bg-white rounded-md p-4 shadow-md mb-6 w-[1197px] h-[397px] mx-auto">
            <div>
              <img
                src={item.img}
                alt="Góc bàn billiards"
                className="w-[459px] h-[367px] object-cover rounded-md shadow-sm"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#7a9c59] mb-1 ">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Why Choose Section */}
      <div className="flex  mt-10 justify-between mx-56 ">
        <div className="">
          <img src={Logo} className="w-[310px] object-cover" />
        </div>
        <div className="text-left space-y-2 text-gray-700  ">
          <h2 className="text-xl font-bold text-[#6ec1e4] mb-4">
            VÌ SAO NÊN CHỌN BILLIARDS CENTER?
          </h2>
          <p>
            - Tất cả bàn Billiards đều đạt chuẩn thi đấu quốc tế, có máy lạnh
          </p>
          <p>- Không gian đẹp, mới hoàn toàn</p>
          <p>- Mở 24/7, có máy lạnh, chơi văn minh</p>
          <p>- Không giới hạn số người chơi, không bắt buộc mua đồ uống</p>
          <p>- Luôn đảm bảo chất lượng bàn, vải</p>
          <p>- Giữ xe miễn phí</p>
          <p>- Vệ sinh găng tay, bi liên tục, vệ sinh phòng 24/7</p>
          <p>- Luôn lắng nghe hội viên</p>
          <p>- Có phòng không hút thuốc</p>
          <p className="mt-4">
            Hãy đến với Billiards Center để cảm nhận những cung bậc cảm xúc
            thăng hoa cùng bộ môn Billiards
          </p>
        </div>
      </div>
    </div>
  );
}
