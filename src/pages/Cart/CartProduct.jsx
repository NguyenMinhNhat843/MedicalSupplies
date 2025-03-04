import { useSelector } from "react-redux";

// component
import ProductItem2 from "../../components/ProductItem2";

const CartProduct = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {carts.length > 0 ? (
        carts.map((cart) => {
          return <ProductItem2 key={cart.id} product={cart} />;
        })
      ) : (
        <p className="text-2xl text-center text-slate-400">
          Không có sản phẩm nào cả
        </p>
      )}
    </>
  );
};

export default CartProduct;
