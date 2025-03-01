// import component
import ProductItem from "../../components/ProductItem";

// import data
import products from "../../data/products";

const BestProduct = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-2 border-b-2 border-slate-400">
        Sản phẩm bán chạy
      </h1>

      <div className="grid grid-cols-4 gap-4 pt-4">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default BestProduct;
