import React, { useRef } from "react";

const Invoice = () => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current;
    const newWin = window.open("");
    newWin.document.write(`
      <html>
        <head>
          <title>Hóa đơn</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            .invoice-header {
              text-align: center;
              margin-bottom: 20px;
            }
            .invoice-details {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            .invoice-details th, .invoice-details td {
              border: 1px solid #000;
              padding: 8px;
              text-align: left;
            }
            .invoice-footer {
              text-align: right;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    newWin.document.close();
    newWin.focus();
    newWin.print();
    newWin.close();
  };

  return (
    <div>
      {/* Giao diện thanh toán */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <h2>Thanh toán</h2>
        <p>
          <strong>Người mua:</strong> Nguyễn Văn A
        </p>
        <p>
          <strong>Sản phẩm:</strong> Laptop Dell XPS 15
        </p>
        <p>
          <strong>Số lượng:</strong> 1
        </p>
        <p>
          <strong>Đơn giá:</strong> 50,000,000 VND
        </p>
        <p>
          <strong>Thành tiền:</strong> 50,000,000 VND
        </p>
        <button onClick={handlePrint} style={{ marginTop: "20px" }}>
          In hóa đơn
        </button>
      </div>

      {/* Giao diện in hóa đơn */}
      <div ref={printRef} style={{ display: "none" }}>
        <div className="invoice-header">
          <h1>Hóa đơn bán hàng</h1>
          <p>Công ty TNHH ABC</p>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</p>
        </div>
        <table className="invoice-details">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laptop Dell XPS 15</td>
              <td>1</td>
              <td>50,000,000 VND</td>
              <td>50,000,000 VND</td>
            </tr>
          </tbody>
        </table>
        <div className="invoice-footer">
          <p>
            <strong>Tổng cộng:</strong> 50,000,000 VND
          </p>
          <p>Ngày: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
