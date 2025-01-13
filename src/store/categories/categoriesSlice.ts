import { createSlice } from "@reduxjs/toolkit";

interface ICategoriesState {
  records: { id: number; title: string; img: string; prefix: string }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
