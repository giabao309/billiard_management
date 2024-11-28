import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error };
};

export const handleLogin = async (
  email,
  password,
  setError,
  setLoading,
  navigate
) => {
  setLoading(true); // Bắt đầu trạng thái loading
  setError(null); // Reset lỗi

  try {
    // Gọi API đăng nhập
    const response = await axios.post(
      "http://localhost:5000/api/users/dangnhap",
      {
        email,
        password,
      }
    );

    // Lưu thông tin token vào localStorage
    const { token } = response.data;
    localStorage.setItem("token", token);

    const decoded = jwtDecode(token);
    localStorage.setItem("userData", decoded);

    const userID = decoded.userId;
    localStorage.setItem("userID", userID);

    const userRole = decoded.roleId;
    localStorage.setItem("userRole", userRole);

    // Chuyển hướng sau khi đăng nhập thành công
    navigate("/admin");
  } catch (err) {
    setError("Thông tin đăng nhập không đúng!"); // Hiển thị lỗi nếu có
    console.error("Lỗi đăng nhập", err);
  } finally {
    setLoading(false); // Kết thúc trạng thái loading
  }
};

export const useGetEmployees = () => {
  const [employees, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/employees"
      );
      setEmployee(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, loading, error };
};
