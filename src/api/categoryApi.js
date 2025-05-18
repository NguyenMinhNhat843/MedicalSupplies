import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL; // Đọc từ .env

const categoryApi = {
  getAll: async () => {
    const response = await axios.get(`${baseUrl}/api/category/list`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${baseUrl}/api/category/${id}`);
    return response.data;
  },

  create: async (categoryData) => {
    const response = await axios.post(`${baseUrl}/api/category`, categoryData);
    return response.data;
  },

  update: async (id, categoryData) => {
    const response = await axios.put(
      `${baseUrl}/api/category/${id}`,
      categoryData
    );
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${baseUrl}/api/category/${id}`);
    return response.data;
  },
};

export default categoryApi;
