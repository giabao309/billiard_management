import { createContext, useState, useEffect } from "react";
import { useGetBranchByID } from "@/APIs/BilliardApi";

export const BookingConText = createContext({});

export const BookingProvider = ({ children }) => {
  const [selectedBranchID, setSelectedBranchID] = useState();

  const { branch } = useGetBranchByID(selectedBranchID) || {};

  return (
    <BookingConText.Provider
      value={{ setSelectedBranchID, selectedBranchID, branch }}
    >
      {children}
    </BookingConText.Provider>
  );
};
