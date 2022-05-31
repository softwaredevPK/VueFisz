<template>
	test
	<FlashCard :frontText="frontText" :backText="backText" @next="next"></FlashCard>
</template>
		
<script setup>
import FlashCard from '@/components/FlashCard.vue';
import {ref} from 'vue'

let frontText = ref('test')
let backText = ref('back test')

function next() {
	frontText.value = 'Tutaj powinno sie zmieniac w funkcji'
	backText.value = 'tutaj tez powinno sie zmieniac, ta funkcja dynamicznie zmienia'
}
</script>


