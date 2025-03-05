import { useSelector } from "react-redux";

// component
import ProductItem2 from "../../components/ProductItem2";

const CartProduct = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  return (
    <div className="overflow-x-auto">
      {carts.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className=" px-4 py-2">Hình ảnh</th>
              <th className="px-4 py-2">Sản phẩm</th>
              <th className="px-4 py-2">Đơn giá</th>
              <th className="px-4 py-2">Số lượng</th>
              <th className="px-4 py-2">Tổng tiền</th>
              <th className="px-4 py-2">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <ProductItem2 key={cart.id} product={cart} />
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
