<template>
    <div class="main">
        <h2>{{ this.name }}</h2>
        <button v-if="!newFlashcard" @click="newFlashcard = !newFlashcard; back_error=false; front_error=false" class="button add-flashcard" type="button">+ Dodaj nową fiszkę</button>
        <div v-else class="flashcard element">
            <form @submit.prevent='addFlashcard'>
                <small v-if="front_error" class="err-info">{{front_error_msg}}</small>
                <input type='text' name='newFrontText' v-model='newFrontText' placeholder="Dodaj przód fiszki..." :class="{'is-invalid': front_error }">
                <small v-if="back_error" class="err-info">{{back_error_msg}}</small>
                <input type='text' name='newBackText'  v-model='newBackText' placeholder="Dodaj tył fiszki..." :class="{'is-invalid': back_error }">
                <button type='submit'>Zapisz zmianę</button>
            </form>
        </div>
        <hr/>
        <small>Wszystkich fiszek: {{this.flashcards.length}}, 
        nauczono: {{this.flashcards.filter(el => el.passed).length}}, 
        do powtórzenia: {{this.flashcards.filter(el => el.repeat_needed).length}}</small>
        <template v-for="(fCard, index) in this.flashcards">
            <FlashCardListEl :frontText="fCard.front" :backText="fCard.back" :id="fCard.id" :repeat_needed="fCard.repeat_needed" :passed="fCard.passed" @remove="removeFlashcard(index)"></FlashCardListEl>
        </template>
    </div>
</template>


<script>
import FlashCardListEl from '@/components/FlashCardListEl.vue';
import axios from 'axios';
import connection from "../connection";

export default {
    name: "viewSet",
    data() {
        return {
            name: "",
            id: 0,
            passed: false,
            repeat: false,
            back_error: false,
            front_error: false,
            front_error_msg: '',
            back_error_msg: '',
            flashcards: [],
            newFlashcard: false,
            newFrontText: '',
            newBackText: '',
            myAxios: connection.axios
        };
    },
    methods: {
         addFlashcard() {
            const setID = this.$route.params.id;
            const formData = {
                front: this.newFrontText,
                back: this.newBackText,
                set: setID,
            }
            this.myAxios
                .post(`/api/v1/flashcards/`, formData)
                .then(res => {
                    this.getFlashCards()
                    this.newFlashcard = false
                    this.newFrontText = "";
                    this.newBackText = "";
                })
                .catch(error => {
                    let data = error.response.data
                    if ('front' in data) {
                        this.front_error = true;
                        this.front_error_msg = data.front[0]
                    }
                    else {
                        this.front_error = false;
                    }
                    if ('back' in data) {
                        this.back_error = true;
                        this.back_error_msg = data.back[0]
                    }
                    else {
                        this.back_error = false;
                    }})
        },
        getFlashCards() {
            const setID = this.$route.params.id;
            axios
                .get(`/api/v1/sets/${setID}`)
                .then(res => {
                this.name = res.data.name;
                this.id = res.data.id;
                this.passed = res.data.passed;
                this.repeat = res.data.repeat_needed;
                this.flashcards = res.data.flashcards
            })
        },
       
        removeFlashcard(index) {
            this.flashcards.splice(index,1)
        },

    },
    created() {
        this.getFlashCards();
    },
    components: { FlashCardListEl }
}
</script>

<style>

button.add-flashcard{
    border: 1px solid #c1c1c1;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 15px 15px 15px 30px;
    display: flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-weight: 700;
    font-family: 'Signika', sans-serif;
    font-size: 16px;
}


button.add-flashcard:hover{
    cursor: pointer;
    background-color: #e1e1e1;
}

button.add-flashcard, hr, .flashcard.element, small:not(.err-info){
    max-width: 450px;
    width: 100%;
    margin-left: 0;
}

.flashcard.element form{
    width: 100%;
    max-width: 450px;
    margin-bottom: 15px;
}

small:not(.err-info){
    padding-bottom: 15px;
    display: block;
    width: 100%;
    text-align: right;
}
</style>