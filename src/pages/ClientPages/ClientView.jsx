import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/logo.png";
import video from "@/assets/videobida.mp4";
import img_room from "@/assets/thiet-ke-quan-bida-anh-dai-dien.jpg";
import img_caosu from "@/assets/h2-772.jpg";
import img_khungsat from "@/assets/khung-sat.jpg";
import img_matda from "@/assets/matda.jpg";
import img_gocban from "@/assets/goc-laminate-1.jpg";
import { BadgeCheck } from "lucide-react";

export default function ClientSection() {
  return (
    <div className="bg-gray-50 pb-10 w-full">
      {/* Thank You Section */}
      {/*Xem ngay and bannel */}
      <div className="relative w-full h-[900px]">
        <img
          src={img_room}
          className="w-full h-full object-cover"
          alt="Billiards hall"
        />

        <div className="absolute inset-0 flex items-center justify-start ml-10">
          <div className="text-white space-y-4 ">
            <p className="w-[700px] mx-auto text-2xl text-left font-bold">
              Không gian được thiết kế rộng rãi, mát lạnh, có máy xông tinh dầu
              tạo mùi thơm dễ chịu. Hệ thống bàn billiards hiện đại, đạt tiêu
              chuẩn quốc tế.
            </p>
            <Button className="bg-orange-500 text-white py-2 px-4 rounded-lg p-6">
              Đặt bàn ngay
            </Button>
          </div>
        </div>
      </div>
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
      <div className="mt-10 mx-auto max-w-5xl px-4 md:px-6 h-auto">
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
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-6 w-full py-2 ">
              CHECK BÀN NGAY
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
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-6 w-full py-2">
              CHECK BÀN NGAY
            </Button>
          </Card>
        </div>
      </div>
      {/* New Product Detail Section */}\{" "}
      <div className="mx-auto px-4 md:px-6 mt-8 bg-[#6ec1e4] w-full py-8">
        <h1 className="text-center text-2xl font-bold mb-8">
          <span className="text-white mr-2"> CHẤT LƯƠNG SẢN PHẨM</span>
          <span className="text-black">BÀN BILLIARDS CENTER</span>
        </h1>
        {/* Detail Section 1 */}
        <div className="grid md:grid-cols-2 gap-4 items-center bg-white rounded-md p-4 shadow-md mb-6 w-[1197px] h-[397px] mx-auto">
          <div>
            <img
              src={img_gocban}
              alt="Góc bàn billiards"
              className="w-[459px] h-[367px] object-cover rounded-md shadow-sm"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#7a9c59] mb-1 ">
              THÀNH BĂNG LAMINATE CHỐNG CHÁY - GÓC HỢP KIM SANG TRỌNG
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Thành băng của bàn <strong>Billiards Centers</strong> mang đến
              trải nghiệm chơi hoàn toàn mới. Với lớp phủ laminate chống cháy và
              góc hợp kim chắc chắn, người chơi sẽ cảm nhận được sự ổn định và
              bền bỉ của bàn qua mỗi cú đánh. Góc thành băng kim loại không chỉ
              tăng độ cứng cáp mà còn mang lại sự sang trọng và đẳng cấp, giúp
              nâng cao trải nghiệm của người chơi.
            </p>
          </div>
        </div>

        {/* Detail Section 2 */}
        <div className="grid md:grid-cols-2 gap-4 items-center bg-white rounded-md p-4 shadow-md mb-6 w-[1197px] h-[397px] mx-auto">
          <div>
            <h3 className="text-base font-semibold text-[#7a9c59] mb-1">
              CAO SU ĐÀI LOAN ROYAL PRO TIÊU CHUẨN HÀN QUỐC
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Độ nảy và độ chính xác của đường bi phụ thuộc lớn vào chất lượng
              của băng cao su. Với băng cao su Đài Loan Royal Pro, tiêu chuẩn
              quốc tế được đảm bảo, giúp đường bi đi chuẩn xác và mượt mà, mang
              đến cảm giác chân thật, tự nhiên trong từng pha chạm. Đối với
              những người đam mê bida, đây là sự khác biệt đáng kể mà bạn sẽ cảm
              nhận trong suốt ván chơi.
            </p>
          </div>
          <div>
            <img
              src={img_caosu}
              alt="Cao su Đài Loan Royal Pro"
              className="w-[534px] h-[365px] object-cover rounded-md shadow-sm"
            />
          </div>
        </div>

        {/* Detail Section 3 */}
        <div className="grid md:grid-cols-2 gap-4 items-center bg-white rounded-md p-4 shadow-md mb-6 w-[1197px] h-[397px] mx-auto">
          <img
            src={img_khungsat}
            alt="Hệ khung sắt"
            className="w-[459px] h-[367px] object-cover rounded-md shadow-sm"
          />
          <div>
            <h3 className="text-base font-semibold text-[#7a9c59] mb-1">
              HỆ KHUNG SẮT I100 TĂNG CHÍNH THÔNG MINH
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Hệ khung sắt I100 với thiết kế tăng chỉnh Bendo thông minh là một
              điểm nhấn của bàn bida cao cấp. Với 27 điểm tăng chỉnh, bạn có thể
              điều chỉnh độ cao thấp của mặt bàn theo ý muốn mà không cần đến
              thiết bị hỗ trợ, giúp duy trì độ phẳng và cân bằng tốt nhất. Sự
              linh hoạt này mang lại cảm giác thoải mái và sự an tâm trong mọi
              trận đấu.
            </p>
          </div>
        </div>

        {/* Detail Section 4 */}
        <div className="grid md:grid-cols-2 gap-4 items-center bg-white rounded-md p-4 shadow-md w-[1197px] h-[397px] mx-auto">
          <div>
            <h3 className="text-base font-semibold text-[#7a9c59] mb-1">
              MẶT ĐÁ CAO CẤP TRUNG QUỐC LOẠI 1
            </h3>
            <p className="text-gray-700 text-sm">
              Mặt đá của bàn bida là yếu tố quan trọng để đảm bảo độ phẳng và
              tính ổn định khi bi lăn. Với mặt đá loại 1 Trung Quốc được xử lý
              bề mặt gần như hoàn hảo, từng cú đánh sẽ diễn ra trơn tru, không
              gây rung lắc, giữ cho cảm giác chơi của bạn luôn liền mạch và tự
              nhiên.
            </p>
          </div>
          <img
            src={img_matda}
            alt="Mặt đá bàn bida"
            className="w-[534px] h-[370px] object-cover rounded-md shadow-sm"
          />
        </div>
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
