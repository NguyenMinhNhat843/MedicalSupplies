import axiosInstance from "./axiosInstance";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const userApi = {
  // GET: Lấy thông tin người dùng
  getUserInfo: async () => {
    const response = await axiosInstance.get(`${baseUrl}/users/me`);
    return response;
  },

  // PATCH/PUT: Cập nhật thông tin người dùng
  updateUserInfo: async (userData) => {
    const response = await axiosInstance.put(`${baseUrl}/users/me`, userData);
    return response;
  },
};

export default userApi;
