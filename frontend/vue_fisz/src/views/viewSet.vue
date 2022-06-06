<template>
    <div class="main">
        <h2>{{ this.name }}</h2>
        <button v-if="!addFlashcard" @click="addFlashcard = !addFlashcard" class="button add-flashcard" type="button">+ Dodaj nową fiszkę</button>
        <div v-else class="flashcard element">
            <form @submit.prevent='editFlashcard(id)'>
                <input type='text' name='front' placeholder="Dodaj przód fiszki...">
                <input type='text' name='back' placeholder="Dodaj tył fiszki...">
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
export default {
    name: "viewSet",
    data() {
        return {
            name: "",
            id: 0,
            passed: false,
            repeat: false,
            flashcards: [],
            addFlashcard: false
        };
    },
    methods: {
        getFlashCards() {
            const setID = this.$route.params.id;
            axios
                .get(`/api/v1/sets/${setID}`)
                .then(res => {
                this.name = res.data.name;
                this.id = res.data.id;
                this.passed = res.data.passed;
                this.repeat = res.data.repeat_needed;
                res.data.flashcards.forEach(el => {
                    this.flashcards.push(el);
                });
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
    border-radius: 25px;
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

button.add-flashcard, hr, .flashcard.element, small{
    max-width: 450px;
    width: 100%;
    margin-left: 0;
}

.flashcard.element form{
    width: 100%;
    max-width: 450px;
    margin-bottom: 15px;
}

small{
    padding-bottom: 15px;
    display: block;
    width: 100%;
    text-align: right;
}
</style>