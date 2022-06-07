<template>
	<form class="flashcard-states">
		<div><input type="radio" id="radio-1" name="radio" @change="emit('all')" checked><label for="radio-1">Wszystkie</label></div>
		<div><input type="radio" id="radio-2" name="radio" @change="emit('toBeRepeatedOnly')"><label for="radio-2">Do powtórzenia</label></div>
		<div><input type="radio" id="radio-3" name="radio" @change="emit('learnedOnly')"><label for="radio-3">Nauczone</label></div>
	</form>
	<label>
	<input type="checkbox" @change="isReversed = !isReversed" :checked="isReversed"/>
		<div class="flip-card">
			<div class="front">
				<p>{{frontText}}</p>
			</div>
			<div class="back">
                <p>{{backText}}</p>
			</div>
		</div>
		<template>
		</template>
        <div class="btn-actions">
            <button class="btn-learned" v-if="showRepeat" @click="checkIfReversed(); learned(id)">Nauczone</button>
            <button class="btn-toRepeat" v-if="showLearned"  @click="checkIfReversed(); toBeRepeated(id)">Do powtórki</button>
            <button class="btn-next" @click="checkIfReversed(); emit('next');">Kolejny</button>
        </div>
	</label>
    
</template>
		
<script setup>
	import { ref} from '@vue/reactivity';
    import axios from 'axios'

	const isReversed = ref(false);
    const props = defineProps(['frontText', 'backText', 'id', 'showLearned', 'showRepeat'])
    const emit = defineEmits(['next', ])  // states of flashcard

	function checkIfReversed(){
		isReversed.value ? isReversed.value = !isReversed.value :"";
	}

	function learned(id) {
		axios
            .patch(`/api/v1/flashcards/${id}/`, {passed: true,})
            .then(response => {
                this.emit('next')
            })
	}

	function toBeRepeated(id) {
			axios
            .patch(`/api/v1/flashcards/${id}/`, {repeat_needed: true,})
            .then(response => {
                this.emit('next')
            })
	}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

label {
	display: block;
	width: 280px;
	height: 350px;
	perspective: 1000px;
	transform-style: preserve-3d;
	cursor: pointer;
}

.flip-card {
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: all 0.5s ease-in-out;
	z-index: 1;
}

.flip-card .front,
.flip-card .back {
	position: absolute;
	width: 100%;
	height: 100%;
	text-align: center;
	/* background: #fff; */
	backface-visibility: hidden;
	border-radius: 20px;
	border: 1px solid #c1c1c1;
	display: flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	font-size: 22px;
	font-weight: 600;
}

.flip-card .back {
	transform: rotateY(180deg);
	color: #000;
	background-color: #000;
	/* background: #fff; */
}

label:hover .flip-card {
	transform: rotateY(2deg);
}

input {
	display: none;
}

:checked + .flip-card {
	transform: rotateY(180deg);
}
label:hover :checked + .flip-card {
	transform: rotateY(175deg);
	box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2);
}

:checked ~ .flip-card .back{
	color: #FFF;
}

hr {
	width: 180px;
	margin: 15px auto 10px auto;
}

.btn-actions{
	display: flex;
    flex-direction: column;
    margin: 20px auto;
    max-width: 80%;
    justify-content: center;
}

.btn-actions [class*="btn"]{
	background: #FFF;
	border: 1px solid #c1c1c1;
	border-radius: 12px;
	padding: 10px;
	font-weight: 700;
	margin-top: 10px;
}

.btn-actions [class*="btn"]:hover,
.btn-actions [class*="btn"]:focus{ 
	background: #000;
	color: #FFF;
	cursor: pointer;
}

form.flashcard-states{
	display: grid;
	max-width: 450px;
	grid-template-columns: repeat(3,1fr);
	margin-bottom: 40px;
	border: 1px solid #c1c1c1;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	text-align: center;
}

.flashcard-states input:checked ~ label{
	background-color: #000;
	color: #FFF;
	transition: .2s;
}

.flashcard-states label{
	width: unset;
	height: unset;
	padding: 5px;
}

.flashcard-states div:first-of-type label{
	border-radius: 15px 0 0 15px;
}

.flashcard-states div:last-of-type label{
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}

</style>




