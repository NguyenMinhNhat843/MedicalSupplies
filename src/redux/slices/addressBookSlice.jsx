import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: [],
  loading: false,
};

const addressBookSlice = createSlice({
  name: "addressBook",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.address = state.address.filter(
        (address) => address.id !== action.payload.id
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { addAddress, removeAddress, setLoading } =
  addressBookSlice.actions;

export default addressBookSlice.reducer;
