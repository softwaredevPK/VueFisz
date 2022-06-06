import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/BaseRouter'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

axios.interceptors.response.use(null, error => {
        console.log(error)
        router.push('/error');
        return Promise.reject(error)
})

createApp(App).use(store).use(router, axios).mount('#app')
