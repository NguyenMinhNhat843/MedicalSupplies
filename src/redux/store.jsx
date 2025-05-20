import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // sử dụng localStorage
import { combineReducers } from "redux";

// Các slice
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

// Cấu hình persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"], // chỉ lưu slice cart
};

// Combine các reducer
const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  auth: authReducer,
});

// Tạo reducer có persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // tránh cảnh báo với Redux Persist
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

export default store;
