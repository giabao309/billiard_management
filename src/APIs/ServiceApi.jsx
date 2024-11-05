export const useGetTable = () => {
  const tables = [
    { id: 1, name: "Bàn 1", status: "in-use" },
    { id: 2, name: "Bàn 2", status: "available" },
    { id: 3, name: "Bàn 3", status: "booked" },
  ];
  return tables;
};
