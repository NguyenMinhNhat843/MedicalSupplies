const tabs = [
  "Thành phần",
  "Công dụng",
  "Cách dùng",
  "Tác dụng phụ",
  "Lưu ý",
  "Bảo quản",
];

const ProductDecription = () => {
  return (
    <div>
      {/* tabs */}
      <div>
        {tabs.map((tab) => {
          return (
            <div key={tab}>
              <button>{tab}</button>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default ProductDecription;
