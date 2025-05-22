import { useEffect, useState } from "react";
import filterProduct from "../../untils/filterProduct";

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
const sortOptions = [
  { label: "Bán chạy nhất", value: "sold" },
  { label: "Yêu thích nhất", value: "liked" },
];

const FilterSidebar = ({ products, setProduct }) => {
  const [customPrice, setCustomPrice] = useState({ min: "", max: "" });
  const [filter, setFilter] = useState({});

  const handleFilter = (option, value) => {
    let newValue;
    if (option === "price") {
      newValue = value;
    }
    if (option === "brand") {
      if (filter.brand) {
        newValue = filter.brand.includes(value)
          ? filter.brand.filter((item) => item !== value)
          : [...(filter.brand || []), value];
      } else {
        newValue = [value];
      }
    }
    if (option === "country") {
      newValue = filter.country
        ? filter.country.includes(value)
          ? filter.country.filter((item) => item !== value)
          : [...(filter.country || []), value]
        : [value];
    }
    if (option === "sort") {
      newValue = value;
    }

    const newFilter = {
      ...filter,
      [option]: newValue,
    };
    setFilter(newFilter);
    const filteredProducts = filterProduct(products, newFilter);
    setProduct(filteredProducts);
  };

  const handleReset = () => {
    setFilter({});
    setCustomPrice({ min: "", max: "" });
    setProduct(products);
  };

  return (
    <div className="w-64 p-4 border rounded-lg bg-white shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Bộ lọc</h2>
        <button
          className="text-blue-600 text-sm cursor-pointer"
          onClick={handleReset}
        >
          Thiết lập lại
        </button>
      </div>

      {/* Giá tiền */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Khoảng giá</h3>
        {priceRanges.map((range, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 mt-1 cursor-pointer"
          >
            <input
              type="radio"
              name="price"
              checked={filter.price ? filter.price.min === range.min : false}
              onChange={() => handleFilter("price", range)}
            />
            <span>{range.label}</span>
          </label>
        ))}

        {/* Custom input */}
        <div className="mt-2 flex space-x-2">
          <input
            type="number"
            name="min"
            value={customPrice.min}
            placeholder="Từ"
            className="border p-1 w-full rounded"
            onChange={(e) =>
              setCustomPrice({ ...customPrice, min: e.target.value })
            }
          />
          <input
            type="number"
            name="max"
            value={customPrice.max}
            placeholder="Đến"
            className="border p-1 w-full rounded"
            onChange={(e) =>
              setCustomPrice({ ...customPrice, max: e.target.value })
            }
          />
        </div>
        <button
          className="mt-2 w-full text-sm text-white bg-blue-500 rounded p-1 hover:bg-blue-600"
          onClick={() => handleFilter("price", customPrice)}
        >
          Áp dụng
        </button>
      </div>

      {/* Thương hiệu */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">
          Thương hiệu {filter.brand ? filter.brand.length : 0}
        </h3>
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex items-center space-x-2 mt-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={filter.brand ? filter.brand.includes(brand) : false}
              onChange={() => handleFilter("brand", brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {/* Xuất xứ */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">
          Xuất xứ ({filter.country ? filter.country.length : 0})
        </h3>
        {countries.map((country) => (
          <label
            key={country}
            className="flex items-center space-x-2 mt-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={
                filter.country ? filter.country.includes(country) : false
              }
              onChange={() => handleFilter("country", country)}
            />
            <span>{country}</span>
          </label>
        ))}
      </div>

      {/* Sắp xếp */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Sắp xếp</h3>
        <select
          className="w-full border p-2 rounded"
          value={filter.sort || ""}
          onChange={(e) => handleFilter("sort", e.target.value)}
        >
          <option value="">-- Chọn --</option>
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
