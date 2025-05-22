import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// component
import ProductItem2 from "../../components/ProductItem2";
import cartApi from "../../api/cartApi";
import productApi from "../../api/productApi";
import { setCartItems } from "../../redux/slices/cartSlice";
import { getCartThunk } from "../../redux/slices/cartSlice";

const CartProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  const reduxCarts = useSelector((state) => state.cart.cartItems);
  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);

  console.log("CartProduct", reduxCarts);
  if (loading) return <p>Đang tải giỏ hàng...</p>;

  return (
    <div className="overflow-x-auto">
      {reduxCarts.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Hình ảnh</th>
              <th className="px-4 py-2">Sản phẩm</th>
              <th className="px-4 py-2">Đơn giá</th>
              <th className="px-4 py-2">Số lượng</th>
              <th className="px-4 py-2">Tổng tiền</th>
              <th className="px-4 py-2">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {reduxCarts.map((cart, index) => (
              <ProductItem2 key={index} product={cart} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-2xl text-center text-slate-400 mt-4">
          Không có sản phẩm nào trong giỏ hàng
        </p>
      )}
    </div>
  );
};

export default CartProduct;
