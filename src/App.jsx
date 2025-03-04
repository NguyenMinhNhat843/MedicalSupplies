import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import SearchBar from "./layouts/SearchBar";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/search-result/:slug" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
