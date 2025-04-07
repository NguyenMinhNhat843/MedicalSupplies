import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
import Dashboard from "./pages/AdminUser/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import SalesManager from "./pages/AdminUser/SalesManager/SalesManager";
import PersonelManeger from "./pages/AdminUser/PersonelManager/PersonelManager";
import CustomerManager from "./pages/AdminUser/CustomerManager/CustomerManager";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Admin routes with AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="salesmanagement" element={<SalesManager />} />
            <Route path="personelmanagement" element={<PersonelManeger/>}/>
            <Route path="customermanagement" element={< CustomerManager />} />
          </Route>

          {/* User routes with Header, SearchBar, and Footer */}
          <Route
            element={
              <>
                <Header />
                <SearchBar />
                <Outlet />
                <Footer />
              </>
            }
          >
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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
