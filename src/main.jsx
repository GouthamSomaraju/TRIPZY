import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import Login from './Login-Signup/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Login /> */}
  </StrictMode>
)
