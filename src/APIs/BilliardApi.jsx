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

export const useGetDistrict = () => {
  const [district, setDistrict] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/branches/district"
      );
      setDistrict(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return { district, loading, error };
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
  const branches = [
    { id: 1, name: "Billiard Center Dương Quảng Hàm" },
    { id: 2, name: "Billiard Center Lê Lợi" },
    { id: 3, name: "Billiard Center Nguyễn Văn Lượng" },
    { id: 4, name: "Billiard Center Võ Duy Ninh" },
    { id: 5, name: "Billiard Center Lê Quang Định" },
    { id: 6, name: "Billiard Center Nguyễn Hữu Cảnh" },
    { id: 7, name: "Billiard Center Âu Cơ" },
    { id: 8, name: "Billiard Center Ba Vân" },
  ];
  return branches;
};
