<template>
	<h2>Zestaw: {{setName}}</h2>

	<FlashCard :frontText="current.front" :backText="current.back" :id="current.id" :showLearned="!toBeRepeatedOnly" :showRepeat="!learnedOnly"
	@next="nextFlashcard"
	@learnedOnly="learnChanged" @toBeRepeatedOnly="repeatedChanged" @all="allChanged"></FlashCard>
	
</template>

<script setup>
import FlashCard from '../components/FlashCard.vue';
import axios from 'axios';
import {ref} from 'vue'
import { useRoute } from 'vue-router'

let current = ref({})
let setName = ref('')
let current_id = ref(0)
let learnedOnly = ref(false)
let toBeRepeatedOnly = ref(false)
let flashcards = ref([])
const route = useRoute()
getFlashCards()

function nextFlashcard() {
	current_id.value += 1
	let next = flashcards.value[current_id.value]
	if (next == undefined) {
		current.value = {
					"id": null,
					"front": "",
					"back": ""
					}
	}
	else {
		current.value = next
	}
}

function getFlashCards() {
    const setID = route.params.id;
	let extra_url = ''
	if (learnedOnly.value) {
		extra_url += '?passed=true'
	}
	else if (toBeRepeatedOnly.value) {
		extra_url += '?repeat_needed=true'
	}
 	axios
	   	.get(`api/v1/sets/${setID}/` + extra_url)
		.then(response => {
			current_id.value = 0
			setName.value = response.data.name
            flashcards.value = response.data.flashcards
			if (flashcards.value.length !== 0) {
				current.value = flashcards.value[0]
			}
			else {
				current.value = {
					"id": null,
					"front": "",
					"back": ""
					}
			}
        	}
		)	
}

function learnChanged() {
	learnedOnly.value = true
	toBeRepeatedOnly.value = false
	getFlashCards()
}

function repeatedChanged() {
	learnedOnly.value = false
	toBeRepeatedOnly.value = true
	getFlashCards()
}

function allChanged(){
	learnedOnly.value = false
	toBeRepeatedOnly.value = false
	getFlashCards()
}


</script>

