import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Pagination from "../../components/Pagination";

const ProductList = () => {
  const productsFiltered = useSelector(
    (state) => state.product.productsFiltered
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Số sản phẩm mỗi trang
  const totalPages = Math.ceil(productsFiltered.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsFiltered.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cuộn lên đầu khi currentPage thay đổi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      {productsFiltered.length > 0 ? (
        <div>
          <div className="grid grid-cols-3 gap-6">
            {currentProducts.map((p) => (
              <div key={p.id}>
                <ProductItem product={p} />
              </div>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p className="text-2xl text-slate-300 text-center w-full">
          Không có sản phẩm nào
        </p>
      )}
    </div>
  );
};

export default ProductList;
