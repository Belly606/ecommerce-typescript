import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";

const store = configureStore({
  reducer: { categories },
});

// Infer the `RootState` and `AppDispatch` types from store itself
export type RootStat = ReturnType<typeof store.getState>;
// Infer type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
