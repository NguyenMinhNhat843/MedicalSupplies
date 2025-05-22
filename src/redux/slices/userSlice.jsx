// src/redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    fullName: "",
    dob: "",
    gender: "Nam",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    street: "",
    avatar: "", // Có thể là URL string
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
    },
    resetUserInfo: (state) => {
      state.userInfo = initialState.userInfo;
    },
  },
});

export const { updateUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
