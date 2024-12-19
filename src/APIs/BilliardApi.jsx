import { useEffect, useState } from "react";
import axios from "axios";

export const useGetAddress = () => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/branches/address"
      );
      setAddress(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return { address, loading, error };
};

export const useGetBranch = () => {
  const [branch, setBranch] = useState([]);

  const fetchAddress = async () => {
    const response = await axios.get("http://localhost:5000/api/branches");
    setBranch(response.data);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return { branch };
};

export const useGetBranchByID = (branch_id) => {
  const [branch, setBranch] = useState([]);

  if (!branch_id) {
    return;
  }

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await axios.post(
        "http://localhost:5000/api/branches/id",
        { branch_id }
      );
      setBranch(response.data);
    };

    fetchEmployee();
  }, [branch_id]);

  return { branch };
};

export const useGetDistrict = () => {
  const [district, setDistrict] = useState([]);

  const fetchAddress = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/branches/district"
    );
    setDistrict(response.data);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return { district };
};

export const useGetFloorByBranch = (branch_id) => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    const fetchFloors = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/branches/floor",
          { branch_id }
        );
        setFloors(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchFloors();
  }, [branch_id]);

  return { floors };
};

export const useGetBranches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBranches = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/branches/branch2"
      );
      setBranches(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  return { branches, loading, error };
};

export const fetchBranchDetails = async (branchId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/branches/branchDetails`,
      { params: { branch_id: branchId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching branch details:", error.message);
    throw error;
  }
};

export const deleteWarehouseItem = async (item_id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/storages/warehouse/${item_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting warehouse item:", error.message);
    throw error;
  }
};

export const fetchWarehouseData = async (branchId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/storages/warehouseByBranch`,
      { params: { branch_id: branchId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching warehouse data:", error.message);
    throw error;
  }
};

export const createBranch = async (branchData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/branches/createBranch",
      branchData
    );
    return response.data;
  } catch (err) {
    console.error("Lỗi khi thêm chi nhánh:", err.message);
    throw err;
  }
};

export const updateWarehouseItem = async (item_id, itemData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/storages/warehouse/${item_id}`,
      itemData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating warehouse item:", error.message);
    throw error;
  }
};

export const searchWarehouseByServiceName = async (branchId, serviceName) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/storages/searchWarehouse",
      {
        params: {
          branch_id: branchId,
          service_name: serviceName,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching warehouse data:", error.message);
    throw error;
  }
};
