import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const axiosAuth = axios.create({})
axiosAuth.interceptors.request.use(function (config) {
    if (!config?.headers?.authorization_token && localStorage.getItem("authorization_token")) {
        config.headers.authorization_token = 'Bearer ' + localStorage.getItem('authorization_token')
    }
    if (!config.headers?.authorization_email && localStorage.getItem('authorization_email')) {
        config.headers.authorization_email = localStorage.getItem('email')
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosAuth.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth)
        localStorage.removeItem('email')
        localStorage.removeItem('authorization_token')
    }
    return Promise.reject(error);
});


export default axiosAuth