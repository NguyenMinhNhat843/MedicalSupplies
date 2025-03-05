import FilterSideBar from "./FilterSideBar";
import { useLocation } from "react-router-dom";
import ProductList from "./ProductList";

const SearchResult = () => {
  const location = useLocation();
  // Lấy category được truyền khi chọn 1 danh mục
  const category = location.state?.category;
  // Lấy danh sách sản phẩm sau lọc theo category
  // const products = filterProductByCategory(category.id);
  return (
    <div className="container mx-auto py-4">
      <h1 className="font-bold text-2xl py-4">{category.name}</h1>

      <div className="flex flex-row justify-between">
        <div>
          <FilterSideBar />
        </div>
        <div className="grow ps-8">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
