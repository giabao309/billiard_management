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
