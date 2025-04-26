import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './TRAVEL/Home';
import NavBar from './TRAVEL/NavBar';
import Footer from './TRAVEL/Footer';
import ContactUs from './TRAVEL/Contact';
import About from './TRAVEL/About';
import Packages from './TRAVEL/Packages';
import CategoryPage from './TRAVEL/CategoryPage';
import ProductDetails from './TRAVEL/ProductDetails';
import Login from './Login-Signup/Login';
import SignUp from './Login-Signup/Signup';

function AppWrapper() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
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
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
