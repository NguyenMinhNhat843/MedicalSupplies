import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import SearchBar from "./layouts/SearchBar";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CheckEmail from "./pages/Auth/CheckEmail";
import CreateNewPassword from "./pages/Auth/CreateNewPassword";

const Layout = ({ children }) => {
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
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/search-result/:slug" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // hoặc PropTypes.element nếu bạn muốn cụ thể hơn
};

export default App;
