<template>
    <div class="main">
        <h2>Set name</h2>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Sets',
    beforeCreate() {
        let sets = [];
            axios
                .get('/api/v1/sets/', )
                .then( response => {
                    sets = response.data
                })
        }       

    }
</script>


<style scoped>
    .main {
        padding-top: 10px;
    }
</style>
