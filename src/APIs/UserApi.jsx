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

export const handleRegister = async (
  email,
  user_name,
  numberphone,
  password,
  setError,
  setLoading,
  setSuccess
) => {
  setLoading(true); // Bắt đầu trạng thái loading
  setError(null); // Reset lỗi

  try {
    // Gọi API đăng nhập
    const response = await axios.post(
      "http://localhost:5000/api/users/dangky",
      {
        email,
        user_name,
        numberphone,
        password,
      }
    );
    if (response.data.success) {
      setSuccess("Đăng ký thành công! Chúc mừng bạn đã trở thành thành viên.");
    } else {
      // Nếu không có thành công, cập nhật lỗi nếu có
      setError(response.data.message || "Có lỗi xảy ra!");
    }
  } catch (err) {
    setError("Thông tin nhập vào không đúng!"); // Hiển thị lỗi nếu có
    console.error("Lỗi đăng nhập", err);
  } finally {
    setLoading(false); // Kết thúc trạng thái loading
  }
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
    if (userRole == 1) {
      navigate("/admin");
    } else if (userRole == 2) {
      navigate("/employee/cashier");
    } else if (userRole == 3) {
      navigate("/client");
    } else {
      navigate("/");
    }
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

export const useGetEmployeeByID = (user_id) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/employeeID",
          { user_id }
        );
        setEmployee(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [user_id]);

  return { employee };
};

export const useGetUserByID = (user_id) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/userID",
          { user_id }
        );
        setUser(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [user_id]);

  return { user };
};

export const useSearchCustomer = (query) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (!query) {
      setCustomer(null);
      return;
    }
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/customer",
          { query }
        );
        setCustomer(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [query]);

  return { customer };
};
