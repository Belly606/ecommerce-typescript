import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWshlist from "./act/actGetWishlist";
import { TLoading } from "@cutomTypes/shared";
import { TProduct } from "@cutomTypes/product";

type TWishlistState = {
  itemsId: number[];
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
};

const initialState: TWishlistState = {
  itemsId: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    productsFullInfoCleanUp: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productsFullInfo = state.productsFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // Get Wishlist Items
    builder.addCase(actGetWshlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWshlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetWshlist.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actLikeToggle, actGetWshlist };
export const { productsFullInfoCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;
