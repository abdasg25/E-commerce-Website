import { FaGoogle } from 'react-icons/fa';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import { signUpSchema } from './signupSchema';
import { signUp } from '../../Services api/signup';
import Snackbar from '@mui/material/Snackbar';
import './signup.css';
const SignUp = () => {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // Define your initial form values here
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: signUpSchema,
      onSubmit: async (values, { setSubmitting, setErrors }) => {
        try {
          const data = { username: values.name, email: values.email, password: values.password };
          const response = await signUp(data);
          console.log("Sign up successful!Please verify your Email.Check Inbox")
          setMessage("Sign up successful!Please verify your Email.Check Inbox")
          setDisplayAlert(true)
        } catch (error) {
          if (error && error.data && error.data.errors) {
            // setErrors(error.data.errors);
            // console.log(error)
            // console.log(error.data)
            setMessage(error.data.errors)
            setDisplayAlert(true)
          } else {
            // Handle generic error
            setErrors({ general: 'An error occurred during sign up. Please try again.' });
            setMessage("An error occurred during sign up. Please try again.")
            setDisplayAlert(true)
          }
        } finally {
          setSubmitting(false);
        }
      },

    });
    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setDisplayAlert(false)
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

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


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add form validation and submission logic here
  //   console.log('Form submitted', formData);
  // };

  const handleGoogleSignUp = () => {
    // Add Google sign-up logic here
    console.log('Google sign-up clicked');
  };

  return (
    <>
      <Header />
      <NavBar />
      {displayAlert?
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClick={handleClose}
        message= {message}
        key={vertical + horizontal}
      />:''}
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
              id='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <input
              type="email"
              name="email"
              id='email'
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <input
              type="password"
              name="password"
              id='password'
              placeholder="Confirm Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.password && touched.password ? (
                <p className='form-error'>{errors.password}</p>
              ) : null}
            <input
              type="password"
              name="confirmPassword"
              id='confirmPassword'
              placeholder="Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
             {errors.confirmPassword && touched.confirmPassword ? (
                <p className='form-error'>{errors.confirmPassword}</p>
              ) : null}
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
