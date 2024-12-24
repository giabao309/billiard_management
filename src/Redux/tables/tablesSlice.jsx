import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action để fetch dữ liệu bàn
export const fetchTablesByBranch = createAsyncThunk(
  "tables/fetchTablesByBranch",
  async (branch_id) => {
    const response = await axios.post(
      "http://localhost:5000/api/tables/branch",
      { branch_id }
    );
    return response.data;
  }
);

// Async action để fetch dữ liệu bàn
export const fetchTablesByID = createAsyncThunk(
  "tables/fetchTablesByID",
  async (table_id) => {
    const response = await axios.post("http://localhost:5000/api/tables/id", {
      table_id,
    });
    return response.data;
  }
);

// Async action để fetch dữ liệu lầu
export const fetchFloors = createAsyncThunk(
  "tables/fetchFloors",
  async (branch_id) => {
    const response = await axios.post(
      "http://localhost:5000/api/branches/floor",
      { branch_id }
    );
    return response.data;
  }
);

// Async action để fetch dữ liệu lầu
export const fetchInvoices = createAsyncThunk(
  "tables/fetchInvoices",
  async (table_id) => {
    if (!table_id) {
      return [];
    }
    const response = await axios.post("http://localhost:5000/api/invoices/id", {
      table_id,
    });
    return response.data;
  }
);

export const fetchInvoiceDetail = createAsyncThunk(
  "tables/fetchInvoiceDetail",
  async (invoices_id) => {
    const response = await axios.post(
      "http://localhost:5000/api/invoices/getInvoiceDetail",
      {
        invoices_id,
      }
    );
    return response.data;
  }
);

const tablesSlice = createSlice({
  name: "tables",
  initialState: {
    tablesByBranch: [],
    tablesByID: [],
    floors: [],
    invoiceDetail: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTablesByBranch.fulfilled, (state, action) => {
        state.tablesByBranch = action.payload;
      })
      .addCase(fetchTablesByID.fulfilled, (state, action) => {
        state.tablesByID = action.payload;
      })
      .addCase(fetchFloors.fulfilled, (state, action) => {
        state.floors = action.payload;
      })
      .addCase(fetchInvoiceDetail.fulfilled, (state, action) => {
        state.invoiceDetail = action.payload;
      });
  },
});

export default tablesSlice.reducer;
