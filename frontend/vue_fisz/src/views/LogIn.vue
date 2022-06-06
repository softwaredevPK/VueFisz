<template>
    <div class="log-in">
        <h2>Zaloguj</h2>
        <p v-if="main_error" class="err-info" style="margin-bottom: 15px;">{{errors.non_field_errors[0]}}</p>
        <form @submit.prevent='submitForm'>
            <small v-if="email_error" class="err-info">{{errors.email[0]}}</small>
            <input type='email' name='email' placeholder="Podaj adres email..." v-model='email' :class="{'is-invalid': email_error}">
            <small v-if="password_error" class="err-info">{{errors.password[0]}}</small>
            <input type='password' name='password' placeholder="Podaj hasło..." v-model='password' :class="{'is-invalid': password_error}">
            <button type='submit'>Log in</button>
        </form>

    </div>
</template>

<style>
form{ 
    display: flex;
    max-width: 350px;
    flex-direction: column;
}
form input{
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #c1c1c1;
    border-radius: 15px;
    box-shadow: 0 0 3px #c1c1c1;
}

form input::placeholder{
    font-family: "Signika", sans-serif;
    font-weight: 400;
    font-size: 1.3em;
}

form button{ 
    margin-top: 5px;
    border: 1px solid #c1c1c1;
    border-radius: 15px;
    padding: 10px;
    background-color: #000;
    color: #FFF;
    font-size: 1.3em;
    font-weight: 700;
    font-family: "Signika",sans-serif;
}

form button:hover,
form button:focus{
    background-color: #333;
    cursor: pointer;
}


</style>
<script>
import axios from 'axios'
import connection from "../connection";

export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            password_error: false,
            email_error: false,
            main_error: false,     
            axios: connection.axios
        }
    },
    methods: {
        submitForm(e) {
            const formData = {
                email: this.email,
                password: this.password,
            }

            this.axios
                .post('/api/v1/token/login', formData)
                .then( response => {
                    const token = response.data.auth_token    
                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    localStorage.setItem('token', token)
                    this.$router.push('/dashboard')
                })
                .catch(error => {
                    this.errors = error.response.data
                    if ('password' in this.errors) {
                        this.password_error = true;
                    }
                    else {
                        this.password_error = false;
                    }
                    if ('email' in this.errors) {
                        this.email_error = true;
                    }
                    else {
                        this.email_error = false;
                    }
                    if ('non_field_errors' in this.errors){
                        this.main_error = true;
                    }
                    else {
                        this.main_error = false;
                    }
                    })
        }       

    }
}


</script>