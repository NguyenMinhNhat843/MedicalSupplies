import img_p from "../assets/image_products/P09468_1_l.avif";
import Proptyes from "prop-types";

const ProductItem2 = ({ product }) => {
  return (
    <div
      className="flex items-center justify-between border border-slate-300 rounded-lg mb-4 p-4"
      style={{ height: "70px" }}
    >
      <div>
        <img
          src={img_p}
          alt="ảnh sản phẩm"
          className="h-full"
          style={{ height: "50px" }}
        />
      </div>
      <p>{product.name}</p>
      <p>{product.price} đ</p>
      <p>{product.quantity}</p>
      <p>{product.price * product.quantity} đ</p>
    </div>
  );
};

ProductItem2.propTypes = {
  product: Proptyes.shape({
    name: Proptyes.string.isRequired,
    price: Proptyes.number.isRequired,
    quantity: Proptyes.number.isRequired,
    total: Proptyes.number.isRequired,
  }).isRequired,
};

export default ProductItem2;
