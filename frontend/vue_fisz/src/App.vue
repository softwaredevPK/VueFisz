<template>
    <div id='nav'>
      test
        <router-link to='/sign-up'>Sign up</router-link> |
        <router-link to='/log-in'>Log in</router-link>

        <br>
        <router-link to='/dashboard' v-if="this.$store.state.isAuthenticated">Dashboard</router-link>
    </div>
    <router-view></router-view>
</template>


<script>
    import axios from 'axios'

    export default {
        // name: 'app',

         // przed pierwszym załądowaniem się strony
        beforeCreate() {
            this.$store.commit("initializeStore")

            const token = this.$store.state.token

            if (token) {
                axios.defaults.headers.common['Authorization'] = 'Token ' + token
            }
            else {
                axios.defaults.headers.common['Authorization'] = ''
            }
        }
    }
</script>

<style>
    #nav {
        padding: 30px;
    }

</style>
