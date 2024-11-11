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

export const useGetFloor = () => {
  const tables = [
    { name: "Tầng 1", id: "floor-1" },
    { name: "Tầng 2", id: "floor-2" },
    { name: "Tầng 3", id: "floor-3" },
  ];
  return tables;
};
