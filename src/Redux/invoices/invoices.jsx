import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action để fetch dữ liệu bàn
export const fetchInvoicesByTableID = createAsyncThunk(
  "tables/fetchTablesByBranch",
  async (table_id) => {
    const response = await axios.post("http://localhost:5000/api/invoices/id", {
      table_id,
    });
    return response.data;
  }
);

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoicesByTableID: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInvoicesByTableID.fulfilled, (state, action) => {
      state.invoicesByTableID = action.payload;
    });
  },
});

export default invoicesSlice.reducer;
