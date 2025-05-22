import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";
import { set } from "lodash";

// ✅ Thunk để gọi API
export const getCartThunk = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartApi.getCart();
      console.log("response", response);
      if (response.status === 200) {
        console.log("Giỏ hàng:", response.data.items);
        return response.data.items; // trả về mảng cart items
      } else {
        return rejectWithValue("Lỗi khi gọi API giỏ hàng");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API getCart:", error);
      return rejectWithValue(error.message || "Lỗi không xác định");
    }
  }
);

const initialState = {
  cartItems: [], // Danh sách sản phẩm trong giỏ hàng
  total: 0,
  loading: true, // Trạng thái tải dữ liệu
  error: null, // Thông báo lỗi
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.cartItems.push({ ...product, quantity: product.quantity });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        state.total = state.cartItems.length;
      })
      .addCase(getCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Lỗi không xác định";
      });
  },
});

export const {
  addToCart,
  setTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  setCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
