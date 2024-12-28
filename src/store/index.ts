import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const rooteReduscer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
});

const store = configureStore({
  reducer: rooteReduscer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
