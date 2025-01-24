import { TProduct } from "@cutomTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
