import axios from "axios";
import axiosInstance from "./axiosInstance";

const baseUrl = import.meta.env.VITE_API_BASE_URL; // Đọc từ .env

const authApi = {
  register: async (userData) => {
    const response = await axiosInstance.post(
      `${baseUrl}/auth/register`,
      userData
    );
    return response;
  },

  verifyOtp: async (otpData) => {
    const response = await axiosInstance.post(
      `${baseUrl}/auth/register/confirm-otp`,
      otpData
    );
    return response;
  },

  login: async (userData) => {
    const response = await axios.post(`${baseUrl}/auth/login`, userData);
    return response;
  },
};

export default authApi;
