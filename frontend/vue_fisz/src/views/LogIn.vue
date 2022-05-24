<template>
    <div class="log-in">
        <h1>Log In</h1>

         <form @submit.prevent='submitForm'>
            <input type='email' name='email' v-model='email'>
            <input type='password' name='password' v-model='password'>
            <button type='submit'>Log in</button>
        </form>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        submitForm(e) {
            const formData = {
                email: this.email,
                password: this.password,
            }

            axios
                .post('/api/v1/token/login', formData)
                .then( response => {
                    const token = response.data.auth_token    
                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common['Autherization'] = "Token " + token
                    localStorage.setItem('token', token)
                    this.$router.push('/log-in')
                })
                .catch(error => {console.log(error)})
        }       

    }
}


</script>