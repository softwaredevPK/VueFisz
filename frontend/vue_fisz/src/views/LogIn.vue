<template>
    <div class="log-in">
        <h2>Zaloguj</h2>

         <form @submit.prevent='submitForm'>
            <input type='email' name='email' placeholder="Podaj adres email..." v-model='email'>
            <input type='password' name='password' placeholder="Podaj hasło..." v-model='password'>
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
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    localStorage.setItem('token', token)
                    this.$router.push('/dashboard')
                })
                .catch(error => {console.log(error)})
        }       

    }
}


</script>