import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItemsId from "./act/actGetProductsByItemsId";
import { getCartTotalQuantitySelector } from "./selectors";
import { TProduct, TLoading, isString } from "@types";

type TCartState = {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
};

const initialState: TCartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el.id !== action.payload
      );
    },

    cartProductsFullInfoCleanUp: (state) => {
      state.productsFullInfo = [];
    },

    cartClearAfterPlaceOrder: (state) => {
      state.items = {};
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItemsId.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItemsId.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItemsId.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItemsId };

export const {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
  cartProductsFullInfoCleanUp,
  cartClearAfterPlaceOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
