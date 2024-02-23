import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import OffersPage from "./pages/OffersPage";
import Cart from "./pages/Cart";
import Stores from "./pages/Stores";
import Wishlist from "./pages/Wishlist";
import CurrentUserProvider from "./context/userContext/CurrentUserProvider";

function App() {
  return (
    <CurrentUserProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/orders" element={<Cart />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
    </CurrentUserProvider>
  );
}

export default App;
