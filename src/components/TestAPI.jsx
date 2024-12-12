import React, { useState } from "react";
import { useSearchCustomer } from "@/APIs/UserApi";
import { Input } from "@/components/ui/input";

const UserPage = () => {
  const [query, setQuery] = useState(""); // Giá trị tìm kiếm
  const { customer } = useSearchCustomer(query); // Hook API tìm kiếm

  const handleChange = (event) => {
    setQuery(event.target.value); // Cập nhật giá trị tìm kiếm
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Tìm kiếm khách hàng"
        value={query}
        onChange={handleChange}
      />

      <div>Tên bạn: {query}</div>

      {/* Hiển thị kết quả tìm kiếm */}
      <div>
        {customer && customer.length > 0 ? (
          <ul>
            {customer.map((cust) => (
              <li key={cust.id}>
                <div>
                  <strong>Tên:</strong> {cust.name}
                </div>
                <div>
                  <strong>Email:</strong> {cust.email}
                </div>
                <div>
                  <strong>Số điện thoại:</strong> {cust.numberphone}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>Không có kết quả nào</div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
