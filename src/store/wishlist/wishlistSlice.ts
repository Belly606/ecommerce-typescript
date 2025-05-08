import { createSlice } from "@reduxjs/toolkit";

type TWishlistState = {
  itemsId: number[];
};

const initialState: TWishlistState = {
  itemsId: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});

export default wishlistSlice.reducer;
