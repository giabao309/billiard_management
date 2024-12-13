import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTable = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTables = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tables");
      setTables(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return { tables, loading, error };
};

export const useGetTableByBranch = (branch_id) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/tables/branch",
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

export const useGetTableStatus = () => {
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/tables/status"
      );
      setStatus(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return { status, loading, error };
};

export const useUpdateOpenTable = () => {
  const [message, setMessage] = useState("");

  const openTable = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tables/openTable",
        { table_id: id }
      );

      setMessage("Thành công");
    } catch (err) {
      setMessage("Có lỗi xảy ra");
    }
  };

  return { message, openTable };
};
