import { useEffect, useState } from "react";
import axios from "axios";

export const useGetInvoiceByTableID = (table_id) => {
  const [invoices, setInvoice] = useState(null);

  useEffect(() => {
    if (!table_id) {
      setInvoice(null);
      return;
    }
    const fetchInvoice1 = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/invoices/id",
          { table_id }
        );
        setInvoice(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchInvoice1();
  }, [table_id]);

  return { invoices };
};

export const useGetInvoiceDetailByID = (invoices_id) => {
  const [invoiceDetail, setInvoiceDetail] = useState(null);

  useEffect(() => {
    const fetchInvoice2 = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/invoices/getInvoiceDetail",
          { invoices_id }
        );
        setInvoiceDetail(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchInvoice2();
  }, [invoices_id]);

  return { invoiceDetail };
};

export const createInvoices = async (
  branch_id,
  employee_id,
  table_id,
  create_date
) => {
  const response = await axios.post(
    "http://localhost:5000/api/invoices/createInvoices",
    {
      branch_id,
      employee_id,
      table_id,
      create_date,
    }
  );
};

export const updateInvoicePayment = async (
  customer_id,
  playtime,
  promotion_id,
  total_cost,
  invoices_id
) => {
  const response = await axios.post(
    "http://localhost:5000/api/invoices/payment",
    {
      customer_id,
      playtime,
      promotion_id,
      total_cost,
      invoices_id,
    }
  );
};

export const useGetPromotion = () => {
  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    const fetchPromotion = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/invoices/promotion"
        );
        setPromotion(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchPromotion();
  }, []);

  return { promotion };
};
