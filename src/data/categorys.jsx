import {
  faBrain,
  faCapsules,
  faHeart,
  faNotesMedical,
  faSoap,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

const categorys = [
  {
    id: 1,
    name: "Thực phẩm chức năng",
    icon: faCapsules,
    items: [
      {
        name: "vitamin & khoáng chất",
        icon: faCapsules,
      },
      {
        name: "Hỗ trợ tiêu hóa",
        icon: faCapsules,
      },
      {
        name: "Thần kinh não",
        icon: faBrain,
      },
      {
        name: "Sức khỏe tim mạch",
        icon: faHeart,
      },
    ],
  },
  {
    id: 2,
    name: "Dược mỹ phẩm",
    icon: faSpa,
    items: [
      {
        name: "Chăm sóc da mặt",
        icon: faSpa,
      },
      {
        name: "Chăm sóc cơ thể",
        icon: faSpa,
      },
      {
        name: "Chăm sóc da vùng mắt",
        icon: faSpa,
      },
      {
        name: "Chăm sóc tóc/da đầu",
      },
    ],
  },
  {
    id: 3,
    name: "Chăm sóc cá nhân",
    icon: faSoap,
    items: [
      {
        name: "Thực phẩm - Đồ uống",
        icon: faSoap,
      },
      {
        name: "Chăm sóc răng miệng",
        icon: faSoap,
      },
      {
        name: "Đồ dùng gia đình",
      },
      {
        name: "TInh dầu các loại",
      },
    ],
  },
  {
    id: 4,
    name: "Thiết bị y tế",
    icon: faNotesMedical,
    items: [
      {
        name: "Dụng cụ y tế",
        icon: faNotesMedical,
      },
      {
        name: "Dụng cụ theo dõi",
        icon: faNotesMedical,
      },
      {
        name: "Dụng cụ sơ cứu",
        icon: faNotesMedical,
      },
      {
        name: "Khẩu trang",
        icon: faNotesMedical,
      },
    ],
  },
];

export default categorys;
