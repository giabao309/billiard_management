import React from "react";
import { Phone, Clock } from "lucide-react"; //
import Logo from "@/assets/logo.png";
import { useGetDistrict } from "@/APIs/BilliardApi";

const Footer = () => {
  const { district } = useGetDistrict();
  return (
    <footer className="flex w-full items-center justify-center bg-gray-100 py-8 ">
      <div className="flex items-center justify-center flex-col w-full container">
        <div className="flex justify-center items-center mb-10">
          <img src={Logo} alt="Logo" className="h-12 mr-3" />
          <h2 className="text-2xl font-bold text-[#6ec1e4]">
            HỆ THỐNG BILLIARDS CENTER
          </h2>
        </div>

        <div className="flex gap-x-16 items-center justify-center w-full text-center md:text-left mb-8">
          {district.map((item, key) => (
            <div>
              <h3 className="text-blue-600 font-semibold">
                Quận {item.district}
              </h3>
              <hr className="border-t border-gray-400 w-1/3 mx-auto md:mx-0 mt-1 mb-2" />
              <p>* 62 Dương Quảng Hàm - Billiards Center</p>
              <p>* 48 Lê Lợi - Billiards Center</p>
              <p>* 144 Nguyễn Văn Lượng - Billiards Center</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-lg font-semibold">
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6" />
            <span>Hotline: 089.838.7684</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6" />
            <span>Thời gian tiếp nhận: 08:00 - 23:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
