<template>
    <div class="logout">
        <button class="btn btn-danger btn-block" v-if="this.$store.state.isAuthenticated" @click.prevent="submitForm">
            <img src="@/assets/logout.png"/><span>Log Out</span>
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
        }       

    }
}


</script>

<style scoped>
 button{
     width: 100%;
     text-align: left;
     font-size: 16px;
     background: transparent;
     border: none;
     font-weight: 400;  
     font-family: "Signika", sans-serif;
    color: #000;
    text-decoration: none;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    display: flex;
    align-items: center;
 }
 button:hover,
 button:focus{
     cursor: pointer;
     background-color: #ddd;
 }
 button:active{
     background-color: #ccc;
 }
</style>