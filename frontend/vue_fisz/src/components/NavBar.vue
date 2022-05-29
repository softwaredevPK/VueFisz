<template>

    <nav class="app-nav">
        <h1><img src="@/assets/Logo.png" alt="VueFisz - aplikacja"></h1>
        <ul>
            <li class="nav-item">
                <router-link to="/" v-if="!this.$store.state.isAuthenticated">Strona główna</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard" v-if="this.$store.state.isAuthenticated">Strona główna</router-link>
            </li>
            <li class="nav-item" v-if="this.$store.state.isAuthenticated">
            <router-link to='/sets' >Zestawy fiszek</router-link> 
            </li>
            <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/sign-up'>Zarejestruj się</router-link> 
            </li>
            <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/log-in'>Zaloguj się</router-link> 
            </li>
            <li class="nav-item" v-if="this.$store.state.isAuthenticated">
                <LogOut></LogOut>
            </li>
        </ul>
    </nav>
</template>

<script>
import LogOut from './Logout.vue'
export default{
    components: {LogOut}
}
</script>


<style>
    .app-nav{
        display: flex;
        flex-direction: column;
        border-right: 1px solid #c1c1c1;
        padding: 20px
    }

    .app-nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .app-nav ul a{
        color: #000;
        text-decoration: none;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        display: block;
    }

    .app-nav ul li a:hover{
        background-color: #ddd;
    }
    .app-nav h1{
        margin: 0;
        padding: 0;

    }

    .app-nav img{
    max-width: 100%;
    }
</style>