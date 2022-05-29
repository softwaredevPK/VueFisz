<template>
    <NavBar></NavBar>
    <div class="content">
        <router-view></router-view>
    <router-link to='/viewflashcards/1'>Flashcard view - temporary</router-link>
    </div>
</template>


<script>
    import axios from 'axios'
//import Logout from './components/Logout.vue'
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
    components: { NavBar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap');

html,body,#app{
    min-height: 100vh;
}

body {
	font-family: 'Signika', sans-serif;
    padding: 0;
    margin: 0;
}

#app{
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-gap: 40px;
    padding: 0 20px 0 0;
}

.content h2{
    font-size: 4em;
}

.content p{ 
    font-size: 1.2em;
}

</style>
