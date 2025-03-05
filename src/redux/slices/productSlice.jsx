import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
  products: products,
  productFilter: products,
  productSelected: null,
  productsFiltered: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    findProductById: (state, action) => {
      state.productSelected = state.products.find(
        (p) => p.id === action.payload
      );
    },
    filterProductByCategory: (state, action) => {
      state.productsFiltered = state.products.filter(
        (p) => p.category_id === action.payload
      );
    },
    filterProductByPrice: (state, action) => {
      state.productsFiltered = state.products.filter(
        (p) => p.price >= action.payload.min && p.price <= action.payload.max
      );
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  updateProduct,
  findProductById,
  filterProductByCategory,
  filterProductByPrice,
} = productSlice.actions;
export default productSlice.reducer;
