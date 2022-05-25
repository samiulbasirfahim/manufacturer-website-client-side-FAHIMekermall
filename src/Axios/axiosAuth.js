import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const axiosAuth = axios.create({})
// Add a request interceptor
axiosAuth.interceptors.request.use(function (config) {
    if (!config?.headers?.authorization_token) {
        config.headers.authorization_token = 'Bearer ' + localStorage.getItem('authorization_token')
    }
    if (!config.headers?.authorization_email) {
        config.headers.authorization_email = localStorage.getItem('email')
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosAuth.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth)
        localStorage.removeItem('email')
        localStorage.removeItem('authorization_token')
    }
    return Promise.reject(error);
});


export default axiosAuth