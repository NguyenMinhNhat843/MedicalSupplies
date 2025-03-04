import ProductInfo from "./ProductInfo";
import ProductDecription from "./ProductDescription";
import { useParams } from "react-router-dom";
// react redux
import { useSelector, useDispatch } from "react-redux";
import { findProductById } from "../../redux/slices/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const p = useSelector((state) => state.product.productSelected);
  const { id } = useParams();
  dispatch(findProductById(id));

  return (
    <div className="container mx-auto py-8">
      <ProductInfo product={p} />
      <ProductDecription product={p} />
    </div>
  );
};

export default ProductDetail;
