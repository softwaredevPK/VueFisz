<template>
    <h2>Zestawy fiszek</h2>
    <div class="container sets">
        <router-link to="createSet">
            <div class="set">
                + Utwórz nowy zestaw
            </div>
        </router-link>
        <!-- v-for starts here -->
        <template v-for="(set, index) in sets">
            <router-link :to="{name: 'viewSet', params: {id: set.id}}" class="set-link">
                <div class="set">
                    <div class="actions">
                        <ul class="action-list">
                            <router-link :to="{name: 'editSet', params: {id: set.id}}" class="set-link">
                                <li><img src="@/assets/edit.png" alt=""></li>
                            </router-link>
                            <router-link :to="{name: 'seeFlashCard', params: {id: set.id}}" class="set-link">
                                <li><img src="@/assets/brain.png" alt=""></li>
                            </router-link>
                            <router-link :to="{name: 'Sets'}" class="set-link">
                                <li @click="deleteSet(set.id, index)"><img src="@/assets/bin.png" alt=""></li><!-- usuwanie - na tej samej zasadzie co konkretne fraszki-->
                            </router-link>
                        </ul>
                    </div>
                    <span class="set-title">{{set.title}}</span>
                </div>
            </router-link>
        </template>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Sets',
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
        },
        deleteSet(id, index) {
            axios
                .delete(`/api/v1/sets/${id}/`)
                .then(response => {
                    this.sets.splice(index, 1)
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
    position: relative;
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

.set .actions{
    visibility: hidden;
    opacity: 0;
    transform: .2s;
}

.set-link:hover .actions,
.set-link:focus .actions{
    visibility: visible;
    opacity: 1;
    display: block;
}

.actions .action-list{
    position: absolute;
    top: 14px;
    left: 0px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.actions img{
    max-width: 37px;
}

.actions li img{
    padding: 3px;
    border-radius: 8px;
    background-color: #c1c1c1;
    transition: .2s;
}

.actions li img:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 7px #666;
}



</style>