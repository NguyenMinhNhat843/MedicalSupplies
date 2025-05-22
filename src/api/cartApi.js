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

  removeCartItem: async (productId) => {
    const response = await axiosInstance.delete(
      `/api/carts/items/${productId}`
    );
    return response;
  },

  increaseQuantity: async (productId, amount = 1) => {
    const response = await axiosInstance.post(
      `/api/carts/items/${productId}/increment?amount=1`,
      {
        amount,
      }
    );
    return response;
  },

  decreaseQuantity: async (productId, amount = 1) => {
    const response = await axiosInstance.post(
      `/api/carts/items/${productId}/decrement`,
      {
        amount,
      }
    );
    return response;
  },
};

export default cartApi;
