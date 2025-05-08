import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProduct } from "@customTypes/product";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "/cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsIds = Object.keys(cart.items);

    if (!itemsIds.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedIds = itemsIds.map((id) => `id=${id}`).join("&");
      const response = await axios.get<TResponse>(
        `/products?${concatenatedIds}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actGetProductsByItems;
