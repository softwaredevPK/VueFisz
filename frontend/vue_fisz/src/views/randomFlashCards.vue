<template>
	<h2>Wylosowana fiszka to:</h2>
	<FlashCard :frontText="current.front" :backText="current.back" :id="current.id" @next="getRandom"></FlashCard>
	
</template>

<script setup>
import FlashCard from '../components/FlashCard.vue';
import axios from 'axios';
import {ref} from 'vue'

let current = ref('')
getRandom()

function getRandom() {
 	axios
	   	.get("api/v1/flashcards/random/")
		.then(response => {
            current.value = response.data
        	}
		)	
}

</script>
