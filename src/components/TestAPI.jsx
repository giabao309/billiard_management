import React, { useState } from "react";
import { useGetUsers } from "@/APIs/UserApi";

const UserPage = () => {
  const { users, loading, error, fetchUserById } = useGetUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);
  const [selectedRole, setSelectedRole] = useState("all");

  const handleUserClick = async (id) => {
    setDetailLoading(true);
    setDetailError(null);
    try {
      const user = await fetchUserById(id);
      setSelectedUser(user);
      setDetailLoading(false);
    } catch (err) {
      setDetailError(err.message);
      setDetailLoading(false);
    }
  };
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setSelectedUser(null); // Đặt lại chi tiết người dùng khi thay đổi lọc
  };
  // Lọc người dùng dựa trên role đã chọn
  const filteredUsers =
    selectedRole === "all"
      ? users
      : users.filter((user) => user.role_id === parseInt(selectedRole));

  if (loading) return <p>Loading danh sách người dùng...</p>;
  if (error) return <p>Error khi tải danh sách: {error}</p>;

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <label htmlFor="roleFilter">Lọc theo vai trò: </label>
        <select
          id="roleFilter"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="all">Tất cả</option>
          <option value="1">Admin</option>
          <option value="2">Nhân viên</option>
          <option value="3">Khách hàng</option>
        </select>
      </div>
      {/* Danh sách người dùng */}
      <div>
        <h1>Danh sách người dùng</h1>
        <ul>
          {filteredUsers.map((user) => (
            <li
              key={user.users_id}
              onClick={() => handleUserClick(user.users_id)}
              style={{ cursor: "pointer" }}
            >
              <span>ten: {user.user_name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chi tiết người dùng đã chọn */}
      <div>
        <h2>Chi tiết người dùng</h2>
        {detailLoading && <p>Loading chi tiết...</p>}
        {detailError && <p>Error: {detailError}</p>}
        {selectedUser ? (
          <div>
            <p>
              <strong>Tên:</strong> {selectedUser.user_name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>SDT</strong> {selectedUser.numberphone}
            </p>
            <p>
              <strong>Role</strong>{" "}
              {selectedUser.role_id === 1
                ? "Admin"
                : selectedUser.role_id === 2
                ? "nhân viên"
                : selectedUser.role_id === 3
                ? "Khách hàng"
                : ""}
            </p>
          </div>
        ) : (
          <p>Chọn một người dùng để xem chi tiết.</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
