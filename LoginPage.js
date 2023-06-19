import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log(formData);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log(formData);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/SignUpPage">
        <button type="submit">Login</button>
    </Link>
      </form>
      <p>Don't have an account? <a href="#" onClick={handleSignup}>Signup</a></p>
    </div>
  );
};

export default LoginPage;
