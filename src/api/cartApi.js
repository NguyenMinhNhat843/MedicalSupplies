import axiosInstance from "./axiosInstance";

const cartApi = {
  addToCart: async (productId, quantity) => {
    const response = await axiosInstance.post("/api/carts/add", {
      productId,
      quantity,
    });
    return response;
  },

  getCart: async () => {
    const response = await axiosInstance.get("/api/carts/details");
    return response;
  },
};

export default cartApi;
