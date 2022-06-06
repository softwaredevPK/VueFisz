<template>
    <h2>Zestawy fiszek</h2>
    <div class="container sets">
        <router-link to="createSet">
            <div class="set">
                + Utwórz nowy zestaw
            </div>
        </router-link>
        <!-- v-for starts here -->
        <template v-for="set in sets">
            <router-link :to="{name: 'viewSet', params: {id: set.id}}">
                <div class="set">
                    <span class="set-title">{{set.title}}</span>
                </div>
            </router-link>
        </template>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Dashboard',
    data (){
        return{
            sets: []
        }
    },
    methods: {
        getTiles(){
            const data = this.sets;

            axios
            .get('/api/v1/sets/')
            .then(res => {
                res.data.forEach(set => {
                    data.push({
                        id: set.id,
                        title: set.name
                    })
                })
            })
        }
    },
    beforeMount() {
        this.getTiles();
    }
}
</script>

<style>
.sets{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4,1fr);
}

.sets a{
    text-decoration: none;
    color: #000;
}
.set{
    padding: 40px 30px 15px 15px;
    border: 1px solid #c1c1c1;
    border-radius: 20px;
    box-shadow: 0px 0px 3px #c1c1c1;
    font-size: 21px;
    min-height: 100px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
}

.set::after{
    width: 75px;
    display: block;
    content: "";
    position: absolute;
    right: 0px;
    bottom: 0;
    background-size: cover;
    height: 70px;
    background-image: url("@/assets/notepad-bg.png");
}

.set:hover{
    box-shadow: 0px 0px 3px #494949;
}

.sets .set .set-title{
    max-width: 140px;
}

</style>