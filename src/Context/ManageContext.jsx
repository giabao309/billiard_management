import { createContext, useState, useEffect } from "react";
import {
  useGetTableByBranchManage,
  useGetFloorByBranchManage,
  updateTableManage,
  useGetShifts,
  updateEmployeeManage,
  useGetCustomer,
  addEmployee,
  deleteEmployee,
} from "@/APIs/Manage";
import { useGetTableStatus, useGetTableType } from "@/APIs/TablesApi";
import { useGetBranch } from "@/APIs/BilliardApi";

export const ManageContext = createContext({});

export const ManageProvider = ({ children }) => {
  const { tables: dataTable } = useGetTableByBranchManage(1);
  const { floors } = useGetFloorByBranchManage(1);
  const { status } = useGetTableStatus();
  const { types } = useGetTableType();
  const { branch } = useGetBranch();
  const { shifts } = useGetShifts();
  const { customers } = useGetCustomer();

  return (
    <ManageContext.Provider
      value={{
        dataTable,
        floors,
        status,
        types,
        updateTableManage,
        branch,
        shifts,
        updateEmployeeManage,
        customers,
        addEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
};
