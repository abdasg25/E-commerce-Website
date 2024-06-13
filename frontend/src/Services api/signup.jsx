// apiService.js
import axios from 'axios';
const backendDomin = "http://localhost:4000";
export const signUp = async (signData) => {
    try {
        console.log(signData);
        const response = await axios.post(`${backendDomin}/api/v1/user/signup`, signData);
        return response;
    } catch (error) {
        throw error.response;
    }
};

