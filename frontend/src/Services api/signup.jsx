// apiService.js
import axios from 'axios';

export const signUp = async (signData) => {
    try {
        console.log(signData);
        const response = await axios.post(`http://localhost:${process.env.FRONTEND_PORT}/hospital/signup`, signData);
        return response;
    } catch (error) {
        throw error.response;
    }
};
