import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TOrderItem } from "@types";

type TOrderSlice = {
  ordersList: TOrderItem[];
  loading: TLoading;
  error: string | null;
};

const initialState: TOrderSlice = {
  ordersList: [],
  loading: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export default ordersSlice.reducer;
