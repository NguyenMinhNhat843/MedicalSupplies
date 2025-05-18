import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";

// Layouts
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SearchBar from "./layouts/SearchBar";
import AdminLayout from "./layouts/AdminLayout";

// Pages - User
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";

// Pages - Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CheckEmail from "./pages/Auth/CheckEmail";
import CreateNewPassword from "./pages/Auth/CreateNewPassword";

// Pages - Admin
import Dashboard from "./pages/AdminUser/Dashboard";
import SalesManager from "./pages/AdminUser/SalesManager/SalesManager";
import PersonelManeger from "./pages/AdminUser/PersonelManager/PersonelManager";
import CustomerManager from "./pages/AdminUser/CustomerManager/CustomerManager";

// Pages - Account
import InfoUser from "./pages/InfoUser";
import ChangePassword from "./pages/ChangePassword";
import ManagerOrder from "./pages/ManagerOrder/ManagerOrder";
import ManagerLocation from "./pages/ManagerLocation/AddressBook";
import UserMenuSideBar from "./pages/InfoUser/UserMenuSideBar";

// Main layout component
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

// User layout for account-related pages
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
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="salesmanagement" element={<SalesManager />} />
          <Route path="personelmanagement" element={<PersonelManeger />} />
          <Route path="customermanagement" element={<CustomerManager />} />
        </Route>

        {/* Main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/search/:slug" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

          {/* Auth routes (dùng chung MainLayout nhưng có ẩn SearchBar) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />

          {/* Account routes */}
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
