import { useSelector } from "react-redux";

// component
import ProductItem2 from "../../components/ProductItem2";

const Cart = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container mx-auto py-4">
      <p className="font-bold text-2xl pb-4">Giỏ hàng</p>
      <div className="flex justify-between">
        {/* Danh sách giỏ hàng */}
        <div className="grow w-3/5">
          {carts.map((cart) => {
            return <ProductItem2 key={cart.id} product={cart} />;
          })}
        </div>
        {/* Tổng tiền */}
        <div className="w-2/5 ms-8 border border-slate-200 rounded-lg p-4">
          <p className="font-bold text-xl">
            Tổng tiền:{" "}
            <span className="text-red-600">
              {carts.reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)}{" "}
              đ
            </span>
          </p>
          <p className="font-bold text-xl pt-4">
            Khuyến mãi: <span className="text-red-600">0 đ</span>
          </p>
          <div className="cursor-pointer">
            <button className="w-full rounded-lg bg-blue-600 py-4 text-xl text-white mt-8">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
