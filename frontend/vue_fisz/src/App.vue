<template>
    <NavBar></NavBar>
    <Logout></Logout>
    <router-view></router-view>
    <router-link to='/viewflashcards/1'>Flashcard view - temporary</router-link>
</template>


<script>
    import axios from 'axios'
import Logout from './components/Logout.vue'
import NavBar from './components/NavBar.vue'
// import Logout from './components/Logout.vue';

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
    components: { Logout, NavBar, Logout }
}
</script>

<style>
    body {
	background: #4e699d;
	font-family: sans-serif;
}

</style>
