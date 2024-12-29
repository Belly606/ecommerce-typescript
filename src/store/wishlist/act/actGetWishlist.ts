import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";

type TResponse = TProduct[];

const GetWishlist = createAsyncThunk(
  "wishlist/GetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1",
        { signal }
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }

      const concatenatedItemsId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default GetWishlist;
