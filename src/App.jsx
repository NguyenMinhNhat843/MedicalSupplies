import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import SearchBar from "./layouts/SearchBar";

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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
