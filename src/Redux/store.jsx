import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "./tables/tablesSlice";
import invoicesReducer from "./invoices/invoices";

const store = configureStore({
  reducer: {
    tables: tablesReducer,
    invoices: invoicesReducer,
  },
});

export default store;
