<template>
    <div class="logout">
        <button class="btn btn-danger btn-block" v-if="this.$store.state.isAuthenticated" @click.prevent="submitForm">
            Log Out
        </button>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'LogOut',
    methods: {
        submitForm(e) {
            axios
                .post('/api/v1/token/logout')
                .then(
                    res =>{
                        console.log(123)
                        console.log(res)
                    } 
                )
                .then( response => {
                    console.log(response)
                    this.$store.commit('removeToken')
                    delete axios.defaults.headers.common["Authorization"]
                    localStorage.removeItem('token')
                    this.$router.push('/log-in')
                })
                .catch(error => {
                    console.log(error)})
        }       

    }
}


</script>