import React, { useRef } from "react";
import QrCode from "@/assets/qrcode.png";

const Invoice = () => {
  return (
    <div className="flex flex-col m-auto w-[40rem] p-4 border">
      <div className="flex flex-col w-full">
        <span>Hệ Thống Billiard Center</span>
        <span>Chi nhánh: Võ Duy Ninh</span>
        <span>Số điện thoại: 0898387684</span>
        <div className="mt-8 w-full">
          <span>Ngày in hoá đơn: </span>
        </div>
      </div>

      <div className="flex flex-col w-full items-center mt-8">
        <span className="text-3xl">HOÁ ĐƠN</span>
        <span className="text-xl">HD001</span>
      </div>

      <div className="flex flex-col w-full items-center mt-8">
        <div className="flex flex-col w-full">
          <span>Khách Hàng: khách lẻ</span>
          <span>Bàn: Bàn 1</span>
          <span>Nhân viên: Cao Tiến</span>
        </div>

        <div className="w-full mt-8">
          <div className="flex w-full justify-between font-bold">
            <span className="w-1/4">Tên sản phẩm</span>
            <span className="w-1/4">Số lượng</span>
            <span className="w-1/4">Đơn giá</span>
            <span className="w-1/4">Thành tiền</span>
          </div>
          <div className="flex w-full justify-around items-center">
            <span className="w-1/4">Coca</span>
            <span className="w-1/4">2</span>
            <span className="w-1/4">25000</span>
            <span className="w-1/4">50000</span>
          </div>
        </div>

        <div className="flex w-full mt-8 flex-col gap-y-2">
          <div className="flex w-full justify-end">
            <span>Tổng tiền hoá đơn:</span>
            <span className="w-1/4 flex justify-end">1000</span>
          </div>
          <div className="flex w-full justify-end">
            <span>Giảm giá:</span>
            <span className="w-1/4 flex justify-end">1000</span>
          </div>
          <div className="flex w-full justify-end">
            <span className="font-bold">Tổng cộng:</span>
            <span className="w-1/4 flex justify-end font-bold">1000</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-8">
          <img src={QrCode} alt="" />
          <span className="mt-2">Cảm ơn quý khách</span>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
