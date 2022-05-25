<template>
    <div id='nav'>
        <div class="tab">
            <img src="@/assets/black_logo.svg">
        </div>
        <div class="tab">
            <router-link to='/dashboard'>Dashboard</router-link>
        </div>
        <div class="tab">
            <!-- link do zestawów czy coś  -->
            <router-link to='/sets'>Learn flashcards</router-link> 
        </div>
        <div class="tab">
            <!-- link do zestawów czy coś  -->
            <router-link to='/viewflashcards'>Learn flashcards</router-link> 
        </div>
        <div class="tab" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/sign-up'>Sign up</router-link> 
        </div>
        <div class="tab" v-if="!this.$store.state.isAuthenticated">
                <router-link to='/log-in'>Log in</router-link>
        </div>
        <div class="tab" v-else>
            <router-link to='/dashboard' >Dashboard</router-link>
        </div>
    </div>
</template>

<style>
    #nav {
        height: 4rem;
        display: flex;
        width: 100%;
        background-color: white;

    }

    #nav img {
        width: 150px;
    }

    .tab {
        margin-right: 20px;
        margin-left: 20px;
        font-size: 25px;
        text-align: center;
        justify-content: center;
        position: relative;
    }
</style>