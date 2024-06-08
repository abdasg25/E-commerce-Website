import React, { useState } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';
import './AddressBook.css';

const AddressBook = () => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            fullName: 'John Doe',
            addressLine1: '123 Main St',
            addressLine2: '',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62704',
            country: 'USA'
        },
        {
            id: 2,
            fullName: 'Jane Smith',
            addressLine1: '456 Elm St',
            addressLine2: 'Apt 2B',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62704',
            country: 'USA'
        }
    ]);

    const addAddress = async (newAddress) => {
        try {
            // Assuming you have an endpoint to post the new address
            const response = await axios.post('YOUR_API_ENDPOINT', newAddress);
            setAddresses([...addresses, { ...newAddress, id: response.data.id }]);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="address-book">
            <h2>Address Book</h2>
            <ul className="address-list">
                {addresses.map(address => (
                    <li key={address.id} className="address-item">
                        <p><strong>{address.fullName}</strong></p>
                        <p>{address.addressLine1}</p>
                        {address.addressLine2 && <p>{address.addressLine2}</p>}
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>{address.country}</p>
                    </li>
                ))}
            </ul>
            <AddressForm addAddress={addAddress} />
        </div>
    );
};

export default AddressBook;
