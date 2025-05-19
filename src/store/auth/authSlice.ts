import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";

type TAuthState = {
  loading: TLoading;
  error: null | string;
};

const initialState: TAuthState = {
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
