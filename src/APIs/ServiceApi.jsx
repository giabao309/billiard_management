export const useGetTable = () => {
  const tables = [
    { id: 1, name: "Bàn 1", status: "in-use" },
    { id: 2, name: "Bàn 2", status: "available" },
    { id: 3, name: "Bàn 3", status: "booked" },
    { id: 4, name: "Bàn 4", status: "in-use" },
    { id: 5, name: "Bàn 5", status: "available" },
    { id: 6, name: "Bàn 6", status: "booked" },
    { id: 7, name: "Bàn 7", status: "in-use" },
    { id: 8, name: "Bàn 8", status: "available" },
    { id: 9, name: "Bàn 9", status: "booked" },
  ];
  return tables;
};

export const useGetFloor = () => {
  const tables = [
    { name: "Tất cả", value: "all-floor" },
    { name: "Lầu 1", value: "floor-1" },
    { name: "Lầu 2", value: "floor-2" },
    { name: "Lầu 3", value: "floor-3" },
  ];
  return tables;
};
