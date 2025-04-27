import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page-wrapper"> {/* FULLSCREEN BG here */}
      <div className="mainLogin">
        <h1>Log In</h1>

        <form>
          <div className="inputField">
            <label htmlFor="email">Username:</label><br />
            <input type="text" name="mail" placeholder="email" required />
          </div>

          <div className="inputField">
            <label htmlFor="password">Enter Password:</label><br />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </div>

          <div className="showPassword">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
            />
            <p>{showPassword ? 'Hide Password' : 'Show Password'}</p>
          </div>

          <button type="submit">Log In</button>
        </form>

        <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
      </div>
    </div>
  );
}

export default Login;
