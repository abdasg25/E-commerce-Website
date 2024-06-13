import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/navBar';
import Header from '../../Components/topHeader/Header';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './verification.css'; // Import a CSS file for styling

const Verification = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('Verifying...');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      const url = `http://localhost:4000/api/v1/user/verifyUser`;
      console.log("Attempting to verify email with URL:", url);
      try {
        const response = await axios.post(url, { token: token });
        console.log("Verification successful:", response.data);
        setMessage('Email verified successfully');
        setIsVerified(true);
      } catch (error) {
        console.error("Verification failed or user already verified");
        setMessage('User already verified or verification failed');
        setIsVerified(false);
      }
    };

    verifyEmail();
  }, [token]);

  const handleClick = () => {
    window.location.href = '/signin';
  };

  return (
    <div className="verification-container">
      <div className={`message-box ${isVerified ? 'success' : 'error'}`}>
        <h1>{message}</h1>
        {isVerified && (
          <button onClick={handleClick} className="btn">
            Go To Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Verification;
