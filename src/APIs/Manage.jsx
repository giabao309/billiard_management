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
