import { createContext, useState } from "react";
import { useGetFloorByBranch } from "@/APIs/BilliardApi";
import { useGetTableByBranch } from "@/APIs/TablesApi";
import {
  useGetMenuTypes,
  useGetMenuItems,
  useGetMenuCategories,
} from "@/APIs/ServiceApi";

export const TableContext = createContext({});

export const TableProvider = ({ children }) => {
  const branch_id = localStorage.getItem("branchID");
  const { floors } = useGetFloorByBranch(branch_id);
  const { tables } = useGetTableByBranch(branch_id);

  //selected table
  const [selectedTable, setSelectedTable] = useState(null);

  //menu data
  const { categories } = useGetMenuCategories();
  const { types } = useGetMenuTypes();
  const { items } = useGetMenuItems();
  return (
    <TableContext.Provider
      value={{
        floors,
        tables,
        categories,
        types,
        items,
        selectedTable,
        setSelectedTable,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
