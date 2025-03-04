import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;
