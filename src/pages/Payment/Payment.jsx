import CartProduct from "../Cart/CartProduct";
import CartInfo from "../Cart/CartInfo";

const Payment = () => {
  return (
    <div className="container mx-auto py-4 flex justify-between">
      <div className="w-3/5 grow pe-16">
        {/* Thông tin nhận hàng */}
        <div>
          <p className="pb-4 font-bold text-lg">Thông tin nhận hàng</p>
          {/* form thông tin nhận hàng */}
          <form action="">
            {/* form group */}
            <div className="mb-4">
              <label htmlFor="" className="block font-semibold pb-2">
                Tên người nhận:{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="tên người nhận"
                className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
              />
            </div>

            {/* form group */}
            <div className="mb-4">
              <label htmlFor="" className="block font-semibold pb-2">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
              />
            </div>

            {/* form group */}
            <div className="mb-4">
              <label htmlFor="" className="block font-semibold pb-2">
                Số điện thoại:{" "}
              </label>
              <input
                type="number"
                name="phone"
                placeholder="số điện thoại"
                className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
              />
            </div>

            {/* form group */}
            <div className="mb-4">
              <label htmlFor="" className="block font-semibold pb-2">
                Địa chỉ:{" "}
              </label>
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ nhận hàng"
                className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
              />
            </div>
          </form>
          {/* end: form thông tin nhận hàng */}
        </div>

        {/* Chọn phương thức thanh toán */}
        <div className="pt-6">
          <div className="flex items-center pb-2">
            <input type="radio" className="w-5 h-5" />
            <span className="ps-4">Thanh toán với Momo</span>
          </div>
          <div className="flex items-center pb-2">
            <input type="radio" className="w-5 h-5" />
            <span className="ps-4">Thanh toán với Zalo pay</span>
          </div>
          <div className="flex items-center pb-2">
            <input type="radio" className="w-5 h-5" />
            <span className="ps-4">Thanh toán bằng chuyển khoản ngân hàng</span>
          </div>
        </div>
      </div>
      {/* Danh sách sản phẩm và tổng tiền */}
      <div className="w-2/5">
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
