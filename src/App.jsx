import "./App.css";
import Header from "./layouts/Header";
import Category from "./layouts/Category";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Category />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
