<template>
    <div class="sign-up">
        <h2>Zarejestruj się</h2>
        <!-- ten prevent sprawia ze strona sie sama nie odswieza po submit-->
        <form @submit.prevent='submitForm'>
            <small v-if="email_error" class="err-info">{{errors.email[0]}}</small>
            <input type='email' name='email' placeholder="Podaj adres e-mail..." v-model='email' :class="{'is-invalid': email_error}">
            <small v-if="password_error" class="err-info">{{errors.password[0]}}</small>
            <input type='password' name='password' placeholder="Podaj haslo..." v-model='password' :class="{'is-invalid': password_error}">
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
            errors: [],
            password_error: false,
            email_error: false,
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
                    })
                 
        }       
    }
}


</script>