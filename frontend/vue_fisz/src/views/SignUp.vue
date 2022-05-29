<template>
    <div class="sign-up">
        <h2>Zarejestruj się</h2>
        <!-- ten prevent sprawia ze strona sie sama nie odswieza po submit-->
        <form @submit.prevent='submitForm'>
            <input type='email' name='email' placeholder="Podaj adres e-mail..." v-model='email'>
            <input type='password' name='password' placeholder="Podaj haslo..." v-model='password'>
            <button type='submit'>Sign up</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'SignUp',
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
                .post('/api/v1/users/', formData)
                .then( response => {
                    this.$router.push('/log-in')
                })
                .catch(error => {console.log(error)})
        }       
    }
}


</script>