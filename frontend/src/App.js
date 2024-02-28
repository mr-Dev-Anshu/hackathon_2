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
import { useContext } from "react";
import { currentUserContext } from "./context/userContext/CurrentUserProvider";
import UserProfilePage from "./pages/UserProfilePage";

import UploadProduct from "./pages/UploadProduct";
import ViewProduct from "./pages/ViewProduct";
import VerificationMsgPage from "./pages/VerificationMsgPage";

function App() {
  const { currUser } = useContext(currentUserContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path={currUser ? "/user" : "/register"}
          element={currUser ? <UserProfilePage /> : <Register />}
        />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/orders" element={<Cart />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/uploadProduct" element={<UploadProduct />} />
        <Route path="/:id" element={<ViewProduct />} />
        <Route path="/verificationPage" element={<VerificationMsgPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
