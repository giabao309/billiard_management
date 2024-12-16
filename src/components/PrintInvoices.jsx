import React from "react";
import QrCode from "@/assets/qrcode.png";

const PrintableInvoice = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="invoice-container">
      <div className="invoice">
        <div className="invoice-header">
          <span>Hệ Thống Billiard Center</span>
          <span>Chi nhánh: Võ Duy Ninh</span>
          <span>Số điện thoại: 0898387684</span>
          <div className="invoice-date">
            <span>Ngày in hoá đơn: </span>
          </div>
        </div>

        <div className="invoice-title">
          <span className="invoice-main-title">HOÁ ĐƠN</span>
          <span className="invoice-id">HD001</span>
        </div>

        <div className="invoice-details">
          <div className="customer-info">
            <span>Khách Hàng: khách lẻ</span>
            <span>Bàn: Bàn 1</span>
            <span>Nhân viên: Cao Tiến</span>
          </div>

          <div className="product-list">
            <div className="product-header">
              <span className="product-column">Tên sản phẩm</span>
              <span className="product-column">Số lượng</span>
              <span className="product-column">Đơn giá</span>
              <span className="product-column">Thành tiền</span>
            </div>
            <div className="product-row">
              <span className="product-column">Coca</span>
              <span className="product-column">2</span>
              <span className="product-column">25000</span>
              <span className="product-column">50000</span>
            </div>
          </div>

          <div className="invoice-summary">
            <div className="summary-row">
              <span>Tổng tiền hoá đơn:</span>
              <span className="summary-value">1000</span>
            </div>
            <div className="summary-row">
              <span>Giảm giá:</span>
              <span className="summary-value">1000</span>
            </div>
            <div className="summary-row total">
              <span>Tổng cộng:</span>
              <span className="summary-value">1000</span>
            </div>
          </div>

          <div className="thank-you">
            <img src={QrCode} alt="QR Code" />
            <span>Cảm ơn quý khách</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrintableInvoice;
