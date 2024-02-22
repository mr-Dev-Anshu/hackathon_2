import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import OffersPage from "./pages/OffersPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
