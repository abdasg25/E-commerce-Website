import React from "react";
import NavBar from "../../Components/NavBar/navBar";
import Header from "../../Components/topHeader/Header";
import Footer from "../../Components/Footer/Footer";
import SideBarAccount from "../../Components/SideBarAccount/SideBarAccount";
import axios from 'axios';
import { useState } from 'react';

import "./account.css";

const Account = () => {
    const [formData, setFormData] = useState({
        firstName: 'Md',
        lastName: 'Rimel',
        email: 'rimel1111@gmail.com',
        address: 'Kingston, 5236, United State',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can add validation here

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };
    return (
        <>
            <Header />
            <NavBar />
            <div className="account-header">
                <span><button className="home">Home /</button>  My Account</span>
                <span className="welcome">Welcome! <span className="user">User</span></span>
            </div>
            <div className="account-container">
                <SideBarAccount />
                <form className="profile-form" onSubmit={handleSubmit}>
                    <p className="edit-profile">Edit your profile</p>
                    <div className="info">
                    <label htmlfor="firstName">
                        First Name
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}  />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}  />
                    </label>
                        </div>
                    <div className="info">
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange}  />
                    </label>
                    <label>
                        Address
                        <input type="text" name="address" value={formData.address} onChange={handleChange}  />
                    </label>
                    </div>
                    <div className="password">
                        <label>Password Changes</label>
                        <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />

                        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                        <input type="password" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} />
                    </div>
                    <div className="buttons">
                        <button type="button" className="cancel-button">Cancel</button>
                        <button type="submit" className="save-button">Save Changes</button>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    );

}

export default Account;