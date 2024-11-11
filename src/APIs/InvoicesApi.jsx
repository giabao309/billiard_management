export const useGetInvoice = () => {
  const invoices = [
    { id: 1, date: "10/07/2024", status: 1 },
    { id: 2, date: "10/07/2024", status: 2 },
  ];
  return invoices;
};

export const useGetInvoiceStatus = () => {
  const status = [
    { id: 1, name: "Chưa thanh toán" },
    { id: 2, name: "Đã thanh toán" },
  ];
  return status;
};

export const useGetInvoicesDetail = () => {
  const detail = [
    {
      id: 1,
      branches: 1,
      invoices: 1,
      service: 1,
      employee: 1,
      customer: 1,
      table: 1,
      playtime: 3.4,
      quantity: 1,
      date: "10/07/2024",
    },
  ];
  return detail;
};
