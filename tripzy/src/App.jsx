import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './TRAVEL/NavBar';
import Footer from './TRAVEL/Footer';
import Home from './TRAVEL/Home';
import ContactUs from './TRAVEL/Contact';
import About from './TRAVEL/About';
import Packages from './TRAVEL/Packages';
import CategoryPage from './TRAVEL/CategoryPage';
import ProductDetails from './TRAVEL/ProductDetails';
import Login from './Login-Signup/Login'; 
import SignUp from './Login-Signup/signup';

function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/signup'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
