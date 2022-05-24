<template>
    <div id='nav'>
        <router-link to='/sign-up' v-if="!this.$store.state.isAuthenticated">Sign up</router-link> |
        <router-link to='/log-in' v-if="!this.$store.state.isAuthenticated">Log in</router-link>
        <br>
        <router-link to='/dashboard' v-if="this.$store.state.isAuthenticated">Dashboard</router-link>
        <Logout></Logout>
    </div>
    <router-view></router-view>
</template>


<script>
    import axios from 'axios'
import Logout from './views/Logout.vue'

    export default {
    // name: 'app',
    // przed pierwszym załądowaniem się strony
    beforeCreate() {
        this.$store.commit("initializeStore");
        const token = this.$store.state.token;
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Token " + token;
        }
        else {
            axios.defaults.headers.common["Authorization"] = "";
        }
    },
    components: { Logout }
}
</script>

<style>
    #nav {
        padding: 30px;
    }

</style>
