import { useEffect, useState } from "react";
import axios from "axios";

export const useGetMenuItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/services/items"
      );
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, error };
};

export const useGetMenuTypes = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTypes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/services/types"
      );
      setTypes(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return { types, loading, error };
};

export const useGetMenuCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/services/categories"
      );
      setCategories(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useGetServiceByType = (type_id) => {
  const [serviceByType, setServiceByType] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/services/itemsByType",
          { type_id }
        );
        setServiceByType(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchService();
  }, [type_id]);

  return { serviceByType };
};

export const useGetServiceByCate = (category_id) => {
  const [serviceByCate, setServiceByCate] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/services/itemsByCate",
          { category_id }
        );
        setServiceByCate(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchService();
  }, [category_id]);

  return { serviceByCate };
};

export const useSearchService = (query) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    if (!query) {
      setService(null);
      return;
    }
    const fetchService = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/services/searchService",
          { query }
        );
        setService(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchService();
  }, [query]);

  return { service };
};

export const useAddOrUpdateItemInvoice = () => {
  const [message, setMessage] = useState("");

  const addOrUpdateItem = async (invoice_id, service_id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoices/addOrUpdateItem",
        { invoice_id: invoice_id, service_id: service_id }
      );
      setMessage("Thành công");
    } catch (err) {
      setMessage("Thất bại");
    }
  };

  return { message, addOrUpdateItem };
};

export const useDeleteOrUpdateItemInvoice = () => {
  const [message, setMessage] = useState("");

  const deleteOrUpdateItem = async (invoice_id, service_id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoices/deleteOrUpdateItem",
        { invoice_id: invoice_id, service_id: service_id }
      );
      setMessage("Thành công");
    } catch (err) {
      setMessage("Thất bại");
    }
  };

  return { message, deleteOrUpdateItem };
};
