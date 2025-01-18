import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";

export const store = configureStore({
  reducer: { categories, products },
});

// Infer the `RootState` and `AppDispatch` types from store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
