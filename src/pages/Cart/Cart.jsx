// component
import CartProduct from "./CartProduct";
import CartInfo from "./CartInfo";

const Cart = () => {
  return (
    <div className="container mx-auto py-4">
      <p className="font-bold text-2xl pb-4">Giỏ hàng</p>
      <div className="flex justify-between">
        {/* Danh sách giỏ hàng */}
        <div className="grow w-3/4">
          <CartProduct />
        </div>
        {/* Tổng tiền */}
        <div className="w-1/4 ms-8 border border-slate-200 rounded-lg p-4">
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default Cart;
