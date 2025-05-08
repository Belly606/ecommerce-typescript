import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/product";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      const userWishlist = await axios.get<{ productsId: number }[]>(
        "/wishlist?userId=1"
      );

      if (!userWishlist.data.length) {
        fulfillWithValue([]);
      }

      const concatenatedIds = userWishlist.data
        .map((el) => `/id=${el.productsId}`)
        .join("&");

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

export default actGetWishlist;
