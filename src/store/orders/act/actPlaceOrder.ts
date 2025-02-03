import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState;

    const orderList = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      img: el.image,
      quantity: cart.items[el.id],
    }));

    try {
      const response = await axios.post("orders", {
        userId: auth.user?.id,
        items: orderList,
        subtotal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;
