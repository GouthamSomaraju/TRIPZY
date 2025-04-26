import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="mainLogin">
      <h1>Sign Up</h1>

      <form >
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
            onChange={handleCheckboxChange}
            checked={showPassword}
          />
          <p id="getPassword">{showPassword ? 'Hide Password' : 'Show Password'}</p>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account?<Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
