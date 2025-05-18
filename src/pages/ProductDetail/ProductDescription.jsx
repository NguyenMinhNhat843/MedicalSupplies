import PropTypes from "prop-types";
import { useState } from "react";

const ProductDecription = ({ product }) => {
  const { description, howToUse, usageProduct: usage } = product;

  const tabs = [
    { label: "Mô tả", content: description || "Không có thông tin" },
    { label: "Công dụng", content: usage || "Không có thông tin" },
    { label: "Cách dùng", content: howToUse || "Không có thông tin" },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className=" mt-8 flex border-t border-slate-200">
      {/* tabs */}
      <div className="border-e border-slate-200" style={{ width: "30%" }}>
        {tabs.map((tab, index) => {
          return (
            <div
              key={tab.label}
              className={`py-3 border-b border-slate-200 ps-2 cursor-pointer ${
                activeTab === index
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-slate-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <button>{tab.label}</button>
            </div>
          );
        })}
      </div>
      {/* Nội dung hiển thị */}
      <div className="ps-4 pt-4 w-2/3">
        <p className="font-bold text-xl">{tabs[activeTab].label}</p>
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

ProductDecription.propTypes = {
  product: PropTypes.shape({
    howToUse: PropTypes.string,
    preservation: PropTypes.string,
    sideEffects: PropTypes.string,
    usage: PropTypes.string,
    ingredient: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductDecription;
