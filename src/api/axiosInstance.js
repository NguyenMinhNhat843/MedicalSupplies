// src/api/axiosInstance.js
import axios from "axios";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // quan trọng nếu BE có allowCredentials = true
});

// Thêm token vào mọi request nếu có
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user")); // hoặc từ Redux nếu bạn dùng Redux
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
