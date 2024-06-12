import { FaGoogle } from 'react-icons/fa';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
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
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
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
              placeholder="Confirm Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="create-account-button">
              Create Account
            </button>
          </form>
          <button className="google-signup-button" onClick={handleGoogleSignUp}>
            <FaGoogle /> Sign up with Google
          </button>
          <p className="login-link">
            Already have an account? <a onClick={() => handleNavigation('/signin')}>Log in</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
