<template>
	<h2>Losowa fiszka</h2>
	<FlashCard :frontText="current.front" :backText="current.back" :id="current.id" :showLearned="!toBeRepeatedOnly" :showRepeat="!learnedOnly"
	@next="getRandom" @learnedOnly="learnChanged" @toBeRepeatedOnly="repeatedChanged" @all="allChanged"></FlashCard>
	
</template>

<script setup>
import FlashCard from '../components/FlashCard.vue';
import axios from 'axios';
import {ref} from 'vue'

let current = ref('')
let learnedOnly = ref(false)
let toBeRepeatedOnly = ref(false)
getRandom()

function getRandom() {
	let extra_url = ''
	if (learnedOnly.value) {
		extra_url += '?passed=true'
	}
	else if (toBeRepeatedOnly.value) {
		extra_url += '?repeat_needed=true'
	}
 	axios
	   	.get("api/v1/flashcards/random/" + extra_url)
		.then(response => {
            current.value = response.data
        	}
		)	
}

function learnChanged() {
	learnedOnly.value = true
	toBeRepeatedOnly.value = false
	getRandom()
}

function repeatedChanged() {
	learnedOnly.value = false
	toBeRepeatedOnly.value = true
	getRandom()
}

function allChanged(){
	learnedOnly.value = false
	toBeRepeatedOnly.value = false
	getRandom()
}

</script>
