import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL; // Đọc từ .env

const productApi = {
  getAll: async () => {
    const response = await axios.get(`${baseUrl}/api/products/list`);
    return response.data;
  },

  getByCategory: async (categoryId) => {
    const response = await axios.get(
      `${baseUrl}/api/products/category/${categoryId}`
    );
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${baseUrl}/api/products/${id}`);
    return response.data;
  },

  create: async (productData) => {
    const response = await axios.post(`${baseUrl}/api/products`, productData);
    return response.data;
  },

  update: async (id, productData) => {
    const response = await axios.put(
      `${baseUrl}/api/products/${id}`,
      productData
    );
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${baseUrl}/api/products/${id}`);
    return response.data;
  },
};

export default productApi;
