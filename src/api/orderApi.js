import axiosInstance from "./axiosInstance";

const orderApi = {
  createOrder: async (orderData) => {
    const response = await axiosInstance.post("/api/orders", orderData);
    return response;
  },
};

export default orderApi;
