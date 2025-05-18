import FilterSideBar from "./FilterSideBar";
import { useLocation } from "react-router-dom";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";

const SearchResult = () => {
  // Lấy categoryId từ query về
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("id");

  // state
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productApi.getByCategory(categoryId);
        setProducts(data);
        setProductsFiltered(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  // setup phân trang
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="font-bold text-2xl py-4">
        {products.length + " sản phẩm"}
      </h1>

      <div className="flex flex-row pb-4">
        <p className="py-2 px-4 rounded-full bg-blue-400 text-white">
          {"Máy đo huyết áp"}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <FilterSideBar products={products} setProduct={setProductsFiltered} />
        </div>
        <div className="grow ps-8">
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
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
