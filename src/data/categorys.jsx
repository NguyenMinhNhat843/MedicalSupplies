import {} from "@fortawesome/free-solid-svg-icons";

const categorys = [
  {
    id: "C001",
    name: "Thiết bị y tế",
    subcategories: [
      {
        name: "Thiết bị đo lường",
        products: [
          { name: "Nhiệt kế điện tử", price: 150000 },
          { name: "Máy đo huyết áp", price: 800000 },
          { name: "Máy đo đường huyết", price: 1200000 },
        ],
      },
      {
        name: "Thiết bị hỗ trợ",
        products: [
          { name: "Máy xông mũi họng", price: 600000 },
          { name: "Máy trợ thở", price: 2500000 },
        ],
      },
      {
        name: "Thiết bị chẩn đoán",
        products: [
          { name: "Ống nghe y tế", price: 200000 },
          { name: "Đèn soi tai", price: 150000 },
        ],
      },
      {
        name: "Thiết bị lớn",
        products: [
          { name: "Máy siêu âm cầm tay", price: 15000000 },
          { name: "Giường y tế", price: 5000000 },
        ],
      },
    ],
  },
  {
    id: "C002",
    name: "Dụng cụ y tế tiêu hao",
    subcategories: [
      {
        name: "Vật tư dùng một lần",
        products: [
          { name: "Găng tay y tế (hộp 100 cái)", price: 120000 },
          { name: "Khẩu trang y tế (hộp 50 cái)", price: 50000 },
          { name: "Bơm kim tiêm 5ml", price: 2000 },
        ],
      },
      {
        name: "Băng gạc và chăm sóc vết thương",
        products: [
          { name: "Băng gạc vô trùng", price: 10000 },
          { name: "Cồn sát trùng 70 độ (500ml)", price: 45000 },
        ],
      },
      {
        name: "Ống và phụ kiện",
        products: [
          { name: "Ống thông tiểu", price: 25000 },
          { name: "Túi đựng nước tiểu", price: 30000 },
        ],
      },
    ],
  },
  {
    id: "C003",
    name: "Dụng cụ phẫu thuật",
    subcategories: [
      {
        name: "Dụng cụ cơ bản",
        products: [
          { name: "Dao phẫu thuật", price: 50000 },
          { name: "Kéo y tế", price: 80000 },
        ],
      },
      {
        name: "Dụng cụ chuyên sâu",
        products: [{ name: "Bộ khâu vết thương", price: 300000 }],
      },
    ],
  },
  {
    id: "C004",
    name: "Vật tư phòng chống dịch",
    subcategories: [
      {
        name: "Bảo hộ cá nhân",
        products: [
          { name: "Quần áo bảo hộ cấp 4", price: 150000 },
          { name: "Kính chống giọt bắn", price: 30000 },
        ],
      },
      {
        name: "Khử trùng",
        products: [
          { name: "Dung dịch sát khuẩn (1L)", price: 90000 },
          { name: "Máy phun khử trùng", price: 2000000 },
        ],
      },
    ],
  },
];

export default categorys;
