import ProductItem from "../../components/ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id}>
          <ProductItem product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
