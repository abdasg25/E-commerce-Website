
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
import './signin.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted', formData);
  };

  const handleGoogleSignUp = () => {
    // Add Google sign-up logic here
    console.log('Google sign-up clicked');
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="signup-container">
        <div className="image-container">
          <img src="/login.png" alt="Phone with Shopping Cart" />
        </div>
        <div className="form-container">
          <h2>Login to Exclusive</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div classname='login'>
            <button type="submit" className="login-button">
              Log In
            </button>
          {/* <p className="forget-password-link"><a href="/login">Forgot Password</a>
          </p> */}
          </div>
          </form>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
