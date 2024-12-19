import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTableByBranchManage = (branch_id) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manage/tableByBranch",
          { branch_id }
        );
        setTables(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchTables();
  }, [branch_id]);

  return { tables };
};

export const useGetShifts = () => {
  const [shifts, setTables] = useState([]);

  const fetchTables = async () => {
    const response = await axios.get("http://localhost:5000/api/manage/shifts");
    setTables(response.data);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return { shifts };
};

export const useGetCustomerManage = () => {
  const [customer, setTables] = useState([]);

  const fetchTables = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/manage/customers"
    );
    setTables(response.data);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return { customer };
};

export const useGetCustomerByID = (user_id) => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manage/customerByID",
          { user_id }
        );
        setCustomer(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchCustomer();
  }, [user_id]);

  return { customer };
};

export const useGetViewInvoice = (user_id) => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manage/viewInvoice",
          { user_id }
        );
        setInvoice(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchCustomer();
  }, [user_id]);

  return { invoice };
};

export const useGetCustomer = () => {
  const [customers, setTables] = useState([]);

  const fetchTables = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/users/getCustomerManage"
    );
    setTables(response.data);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return { customers };
};

export const useGetFloorByBranchManage = (branch_id) => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manage/floorByBranch",
          { branch_id }
        );
        setFloors(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchTables();
  }, [branch_id]);

  return { floors };
};

export const updateTableManage = async (
  name,
  floor_id,
  type_id,
  status_id,
  price,
  table_id
) => {
  const response = await axios.post(
    "http://localhost:5000/api/manage/updateTableManage",
    {
      name,
      floor_id,
      type_id,
      status_id,
      price,
      table_id,
    }
  );
};

export const updateEmployeeManage = async (
  branch_id,
  shift_id,
  salary,
  employee_id
) => {
  const response = await axios.post(
    "http://localhost:5000/api/manage/updateEmployee",
    {
      branch_id,
      shift_id,
      salary,
      employee_id,
    }
  );
};

export const addEmployee = async (branch_id, shift_id, salary, user_id) => {
  const response = await axios.post(
    "http://localhost:5000/api/manage/addEmployee",
    {
      branch_id,
      shift_id,
      salary,
      user_id,
    }
  );
};

export const deleteEmployee = async (user_id) => {
  const response = await axios.post(
    "http://localhost:5000/api/manage/deleteEmployee",
    {
      user_id,
    }
  );
};

export const useSearchCustomer = (query) => {
  const [customerManage, setCustomer] = useState(null);

  useEffect(() => {
    if (!query) {
      setCustomer(null);
      return;
    }
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/searchCustomerManage",
          { query }
        );
        setCustomer(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [query]);

  return { customerManage };
};

export const useSearchCustomerEdit = (query) => {
  const [customerSearch, setCustomer] = useState(null);

  useEffect(() => {
    if (!query) {
      setCustomer(null);
      return;
    }
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manage/searchCustomers",
          { query }
        );
        setCustomer(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [query]);

  return { customerSearch };
};

export const useSearchEmployee = (query) => {
  const [employeeManage, setCustomer] = useState(null);

  useEffect(() => {
    if (!query) {
      setCustomer(null);
      return;
    }
    const fetchEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/searchEmployeeManage",
          { query }
        );
        setCustomer(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchEmployee();
  }, [query]);

  return { employeeManage };
};
