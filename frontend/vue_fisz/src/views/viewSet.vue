<template>
    <div class="main">
        <h2>{{ this.name }}</h2>
        <template v-for="fCard in this.flashcards">
            <FlashCardListEl :frontText="fCard.front" :backText="fCard.back"></FlashCardListEl>
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
            flashcards: []
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
                res.data.flashcards.forEach(el => {
                    this.flashcards.push(el);
                });
            })
                .catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        console.log(123);
        this.getFlashCards();
    },
    components: { FlashCardListEl }
}
</script>