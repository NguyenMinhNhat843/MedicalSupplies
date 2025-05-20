import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL; // Đọc từ .env

const authApi = {
  register: async (userData) => {
    const response = await axios.post(`${baseUrl}/auth/register`, userData);
    return response;
  },
};

export default authApi;
