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

export const useGetTableAvailable = (branch_id) => {
  const [tableAvailable, setTableAvailable] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/tables/available",
          { branch_id }
        );
        setTableAvailable(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchTables();
  }, [branch_id]);

  return { tableAvailable };
};

export const useGetTableByBranchAndFloor = (branch_id, floor_id) => {
  const [tableByFloor, setTableByFloor] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/tables/BranchAndFloor",
          { branch_id, floor_id }
        );
        setTableByFloor(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchTables();
  }, [branch_id, floor_id]);

  return { tableByFloor };
};

export const useGetTableByBranchAndStatus = (branch_id, status_id) => {
  const [tableByStatus, setTableByStatus] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/tables/BranchAndStatus",
          { branch_id, status_id }
        );
        setTableByStatus(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchTables();
  }, [branch_id, status_id]);

  return { tableByStatus };
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

export const useUpdateCloseTable = () => {
  const [message, setMessage] = useState("");

  const closeTable = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tables/closeTable",
        { table_id: id }
      );

      setMessage("Thành công");
    } catch (err) {
      setMessage("Có lỗi xảy ra");
    }
  };

  return { message, closeTable };
};

export const useUpdateTransferTable = () => {
  const [message, setMessage] = useState("");

  const transferTable = async (table, invoice) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tables/transfer",
        { table_id: table, invoices_id: invoice }
      );

      setMessage("Thành công");
    } catch (err) {
      setMessage("Có lỗi xảy ra");
    }
  };

  return { message, transferTable };
};
