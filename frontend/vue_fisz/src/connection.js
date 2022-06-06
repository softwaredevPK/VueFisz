import {reactive} from 'vue'
import axios from 'axios'

const axiosLogin = axios.create({baseURL: 'http://127.0.0.1:8000'})

export default reactive({
    axios: axiosLogin,
})