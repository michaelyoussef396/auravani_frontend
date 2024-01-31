import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Card';
import LoginSignup from './pages/LoginSiqnup';
import Footer from './components/Footer/Footer';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Mens category="mens" />} />
          <Route path="/womens" element={<Womens category="womens" />} />
          <Route path="/kids" element={<Kids category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
