import React, { useState } from 'react';
import './SignUpPage.css';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log(formData);
  };

  const handleForgotPassword = () => {
    // Perform forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
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
        <Link to="/ForgotPassword">
        <button type="submit">Sign Up</button>
    </Link>
    <Link to="/HomePage">
        <button type="submit">Sign Up</button>
    </Link>
      </form>
      <p>
        Forgot your password?{' '}
        <button className="forgot-password-button" onClick={handleForgotPassword}>
          Reset Password
        </button>
      </p>
    </div>
  );
};

export default SignUpPage;
