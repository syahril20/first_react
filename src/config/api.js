import  axios from 'axios';

// BASE URL
export const API = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})

// SET AUTHORIZATION TOKEN
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete API.defaults.headers.common['Authorization']
    }
}
