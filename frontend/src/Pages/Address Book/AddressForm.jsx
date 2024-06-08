import React, { useState } from 'react';
import './AddressBook.css';

const AddressForm = ({ addAddress }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation here
        addAddress(formData);
        setFormData({
            fullName: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        });
    };

    return (
        <form className="address-form" onSubmit={handleSubmit}>
            <h3>Add New Address</h3>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className="buttons">
                <button type="button" className="cancel-button">Cancel</button>
                <button type="submit" className="save-button">Add Address</button>
            </div>
        </form>
    );
};

export default AddressForm;
