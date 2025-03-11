import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CheckEmail from "./pages/Auth/CheckEmail";
import CreateNewPassword from "./pages/Auth/CreateNewPassword";

// Account pages
import InfoUser from "./pages/InfoUser";
import ChangePassword from "./pages/ChangePassword";
import ManagerOrder from "./pages/ManagerOrder/ManagerOrder";
import ManagerLocation from "./pages/ManagerLocation/AddressBook";

// Layout
import SearchBar from "./layouts/SearchBar";
import UserMenuSideBar from "./pages/InfoUser/UserMenuSideBar";

const MainLayout = () => {
  const location = useLocation();
  const hideSearchBarRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/check-email",
    "/create-new-password",
  ];
  const shouldHideSearchBar = hideSearchBarRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      {!shouldHideSearchBar && <SearchBar />}
      <div className="container mx-auto py-6 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const UserLayout = () => {
  return (
    <div className="flex p-6">
      <div
        className="w-1/4 bg-white rounded-2xl shadow-lg p-6"
        style={{ height: "fit-content" }}
      >
        <UserMenuSideBar />
      </div>

      <div className="w-3/4 pl-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout chính */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/search-result/:slug" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

          {/* Auth routes - dùng chung MainLayout nhưng ko hiện SearchBar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />

          {/* Layout tài khoản riêng */}
          <Route path="/account" element={<UserLayout />}>
            <Route path="info-user" element={<InfoUser />} />
            <Route path="order-history" element={<ManagerOrder />} />
            <Route path="address" element={<ManagerLocation />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
