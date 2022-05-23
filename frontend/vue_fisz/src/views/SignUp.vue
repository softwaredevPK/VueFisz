<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <!-- ten prevent sprawia ze strona sie sama nie odswieza po submit-->
        <form @submit.prevent='submitForm'>
            <input type='email' name='email' v-model='email'>
            <input type='password' name='password' v-model='password'>
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
                    console.log(response)
                })
                .catch(error => {console.log(error)})
        }       

    }
}


</script>