import React from'react';
// import './App.css';
import Home from './TRAVEL/Home';
// import Contact from './TRAVEL/Contact';
import NavBar from './TRAVEL/NavBar';
import TravelHomePage from './TRAVEL/Contact';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
    <NavBar />
        <Routes>
          <Route  path="/" element={<Home />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/contact' element={<TravelHomePage />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
