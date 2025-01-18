import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { TCategory } from "@cutomTypes/category";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await axios.get<TResponse>(
        "http://localhost:5005/categories"
      );
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

export default actGetCategories;
