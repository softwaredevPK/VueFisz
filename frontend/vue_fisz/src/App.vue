<template>
    <NavBar></NavBar>
    <div class="content">
        <router-view></router-view>
    </div>
</template>


<script>
    import axios from 'axios'
    import NavBar from './components/NavBar.vue'

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

.is-invalid{
    border-color: red;
}

.err-info{
    border-radius: 12px;
    padding: 3px 0px 3px 10px;
    margin-bottom: 5px;
    color: #F00;
    font-size: 14px;
}

@media(max-width: 768px){
    #app{
        display: block;
        padding: 0;
    }

    .app-nav img{
        max-width: 200px;
    }

    .app-nav{
        border: none;
    }

    .app-nav ul{
        display: flex;
        justify-content: space-around;
    }

    .app-nav ul a,
    .app-nav ul button{
        padding: 10px 10px;
    }

    .app-nav h1{
        text-align: center;
    }


    .content{
        text-align: center;
    }

    .content{
        padding: 0 30px;
    }

    .content h2{
        margin-top: 10px;
        margin-bottom: 25px;
        font-size: 2em;
    }

    .content .sets{
        grid-template-columns: repeat(3,1fr);
    }

    .content label{
        margin: 0 auto;
    }

    .content form{
        margin: 0 auto;
    }
}
</style>
