import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { filterProductByPrice } from "../../redux/slices/productSlice";

const brands = [
  "Contour Plus",
  "Freestyle Libre",
  "Microlife",
  "Ogcare",
  "Omron",
];

const countries = ["Việt Nam", "Mỹ", "Nhật Bản", "Hàn Quốc", "Trung Quốc"];

const priceRanges = [
  { label: "Dưới 100.000 ₫", min: 0, max: 100000 },
  { label: "100.000 ₫ - 300.000 ₫", min: 100000, max: 300000 },
  { label: "300.000 ₫ - 500.000 ₫", min: 300000, max: 500000 },
  { label: "Trên 500.000 ₫", min: 500000, max: Infinity },
];

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handlePriceRangeChange = (index) => {
    setSelectedPriceRange(index);
    dispatch(filterProductByPrice(priceRanges[index]));
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleReset = () => {
    setSelectedPriceRange(null);
    dispatch(filterProductByPrice({ min: 0, max: Infinity }));
    setSelectedBrands([]);
  };

  return (
    <div className="w-64 p-4 border rounded-lg bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Bộ lọc</h2>
        <button
          className="text-blue-600 text-sm cursor-pointer"
          onClick={handleReset}
        >
          Thiết lập lại
        </button>
      </div>

      {/* Khoảng giá */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Khoảng giá</h3>
      </div>

      {/* Các mức giá */}
      <div className="mt-4">
        {priceRanges.map((range, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer mt-1"
          >
            <input
              type="radio"
              checked={selectedPriceRange === index}
              onChange={() => handlePriceRangeChange(index)}
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>

      {/* Thương hiệu */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">
          Thương hiệu ({selectedBrands.length})
        </h3>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Nhập tên thương hiệu"
        />
        <div className="mt-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer mt-1"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
      {/* end: thương hiệu */}

      {/* Thương hiệu */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">
          Xuất xứ ({selectedBrands.length})
        </h3>
        <div className="mt-2">
          {countries.map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer mt-1"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
      {/* end: thương hiệu */}
    </div>
  );
};

export default FilterSidebar;
