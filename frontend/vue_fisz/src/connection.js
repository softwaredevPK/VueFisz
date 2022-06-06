import {reactive} from 'vue'
import axios from 'axios'

const axiosLogin = axios.create({baseURL: 'http://127.0.0.1:8000'})
axiosLogin.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token'); 
    if (token !== null){
        config.headers.common['Authorization'] = "Token " + token
    }
    return config;
    }, function(error) {
        return Promise.reject(error);
    });

export default reactive({
    axios: axiosLogin,
})