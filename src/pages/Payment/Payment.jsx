import CartProduct from "../Cart/CartProduct";
import CartInfo from "../Cart/CartInfo";

// component
import InfoUser from "./InfoUser";
import MethodPay from "./MethodPay";

const Payment = () => {
  return (
    <div className="container mx-auto py-4 flex justify-between">
      <div className="w-2/5 grow pe-16">
        {/* Thông tin nhận hàng */}
        <InfoUser />

        {/* Chọn phương thức thanh toán */}
        <MethodPay />
      </div>
      {/* Danh sách sản phẩm và tổng tiền */}
      <div className="w-3/5">
        <p className="font-bold text-lg pb-4">Danh sách sản phẩm</p>
        <div>
          <CartProduct />
        </div>
        <div className="pt-8">
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default Payment;
