<template>

    <nav class="app-nav">
        <h1><img src="@/assets/Logo.png" alt="VueFisz - aplikacja"></h1>
        <ul>
            <li class="nav-item">
                <router-link to="/" v-if="!this.$store.state.isAuthenticated"><img src="@/assets/home.png"/><span>Strona główna</span></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard" v-if="this.$store.state.isAuthenticated"><img src="@/assets/home.png"/><span>Strona główna</span></router-link>
            </li>
            <li class="nav-item" v-if="this.$store.state.isAuthenticated">
            <router-link to='/sets' ><img src="@/assets/brain.png"/><span>Zestawy fiszek</span></router-link> 
            </li>
            <li class="nav-item" v-if="this.$store.state.isAuthenticated">
            <router-link to='/random' ><img src="@/assets/brain.png"/><span>Losowa fiszka</span></router-link> 
            </li>
            <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/sign-up'><img src="@/assets/login.png"/><span>Zarejestruj się</span></router-link> 
            </li>
            <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/log-in'><img src="@/assets/login.png"/><span>Zaloguj się</span></router-link> 
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
        display: flex;
        align-items: center;
    }

    .app-nav ul li a:hover,
    .app-nav ul li a:focus{
        background-color: #ddd;
    }
    
    .app-nav ul li a:active{
        background-color: #ccc;
    }

    .app-nav ul li img{
        margin-right: 10px;
        max-width: 25px;
    }

    .app-nav h1{
        margin: 0;
        padding: 0;

    }

    .app-nav img{
    max-width: 100%;
    }
</style>