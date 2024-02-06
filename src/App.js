import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSiqnup';
import Footer from './components/Footer/Footer';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';

function App() {
  return (
    <div>
      <BrowserRouter basename='/auravani_frontend'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
