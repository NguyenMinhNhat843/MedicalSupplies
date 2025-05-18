import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi"; // Giả sử bạn đã có file productApi.js như mình hướng dẫn ở trên

// AsyncThunk để fetch list products từ server
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await productApi.getAll();
    return response; // response.data nếu cần tùy theo productApi bạn viết
  }
);

const initialState = {
  products: [],
  productFilter: [],
  productSelected: null,
  productsFiltered: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
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
    filterByMultifield: (state, action) => {
      const { productsRaw, filter } = action.payload;
      console.log("productsRaw", productsRaw);
      console.log("filter", filter);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // Lưu list products mới vào store
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
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
  filterByMultifield,
} = productSlice.actions;

export default productSlice.reducer;
