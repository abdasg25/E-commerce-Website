
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
import { loginSchema } from './loginSchema';
import {useFormik} from 'formik';
import './signin.css';
import Snackbar from '@mui/material/Snackbar';
const BACKEND_PORT = "http://localhost:4000";
const initialValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        const apiUrl = `${BACKEND_PORT}/api/v1/user/login`;
        const data = values;

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };

        fetch(apiUrl, requestOptions)
          .then(response => {
            if (!response.ok) {
              setDisplayAlert(true)
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('role', data.role);
              console.log(data);
              setMessage("Login successful");
              setDisplayAlert(true)
              // alert("Login successful");
              // localStorage.getItem('role') === "Admin"?
              // window.location.href = '/Admin/Dashboard':
              window.location.href = '/home';
            } else {
              setMessage("Please check the Form/Internet.Signin Failed");
              // alert("Please check the Form/Internet.Signin Failed");
              setDisplayAlert(true)

            }
          })
          .catch(error => {
            // alert("Username password doest match");
                   setMessage("Error signing in:",error);
                   console.log(error);
                   setDisplayAlert(true)

          });
      },
    });










    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setDisplayAlert(false)
      setState({ ...state, open: false });
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
          <h2>Login to Exclusive</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email "
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && touched.email ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              required
            />
            {errors.password && touched.password ? (
            <p className="form-error login-error">{errors.password}</p>
          ) : null}
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