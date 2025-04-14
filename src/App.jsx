import React from'react';
import Home from './TRAVEL/Home';
import NavBar from './TRAVEL/NavBar';
import Footer from './TRAVEL/Footer';
import ContactUs from './TRAVEL/Contact';
import About from './TRAVEL/About';
import './App.css';
// import Contact from './TRAVEL/Contact';
// import TravelHomePage from './TRAVEL/Contact';
// import Login from './Login-Signup/Login'; 

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Packages from './TRAVEL/Packages';
function App() {
  return (
    <BrowserRouter >
    <NavBar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/packages' element={<Packages />} />

          {/* <Route path='/contact' element={<TravelHomePage />} /> */}
          {/* <Route path='/login' element={<Login />} /> */}

        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
