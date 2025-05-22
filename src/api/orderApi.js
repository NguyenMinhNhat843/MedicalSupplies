import axiosInstance from "./axiosInstance";

const orderApi = {
  createOrder: async (orderData) => {
    const response = await axiosInstance.post("/api/orders", orderData);
    return response;
  },

  getOrderByToken: async () => {
    const response = await axiosInstance.get(`/api/orders/order`);
    return response;
  },
};

export default orderApi;
