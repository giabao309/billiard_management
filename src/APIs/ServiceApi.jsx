export const useGetMenuItems = () => {
  const items = [
    { name: "Coca", price: 25000, category: "soda" },
    { name: "Sting", price: 25000, category: "soda" },
    { name: "Sinh tố bơ", price: 32000, category: "smoothie" },
    { name: "Sinh tố dâu", price: 32000, category: "smoothie" },
    { name: "Mì xào bò", price: 42000, category: "food" },
    { name: "Cơm chiên dương châu", price: 42000, category: "food" },
    { name: "Ba số anh", price: 35000, category: "cigarette" },
    { name: "Sài gòn bạc", price: 20000, category: "cigarette" },
    { name: "Bia 333", price: 18000, category: "beer" },
    { name: "Tiger", price: 21000, category: "beer" },
  ];
  return items;
};

export const useGetMenuCategories = () => {
  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "soda", name: "Nước ngọt" },
    { id: "smoothie", name: "Sinh tố" },
    { id: "food", name: "Thức ăn" },
    { id: "cigarette", name: "Thuốc lá" },
    { id: "beer", name: "Bia" },
  ];
  return categories;
};
