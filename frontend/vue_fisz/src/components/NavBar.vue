<template>
    <div id='nav'>
        <div v-if="!this.$store.state.isAuthenticated">
            <router-link to='/sign-up'>Sign up</router-link> |
            <router-link to='/log-in'>Log in</router-link>
        </div>
        <div v-else>
            <router-link to='/dashboard' v-if="this.$store.state.isAuthenticated">Dashboard</router-link>
            <Logout></Logout>
        </div>
    </div>
</template>

<style>
    #nav {
        padding: 20px;
    }
</style>