<template>
	<label>
	<input type="checkbox" />
		<div class="flip-card">
			<div class="front">
				<p>{{frontText}}</p>
			</div>
			<div class="back">
                <p>{{backText}}</p>
			</div>
		</div>
        <div class="btn-actions">
            <button class="btn-learned" @click="emit('learned')">Nauczone</button>
            <button class="btn-toRepeat" @click="emit('toBeRepeated')">Do powtórki</button>
            <button class="btn-next" @click="emit('next')">Next</button>
        </div>
	</label>
    
</template>
		
<script setup>
    const props = defineProps(['frontText', 'backText'])
    const emit = defineEmits(['next', "learned", "toBeRepeated"])  // states of flashcard
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
	color: #FFF;
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

</style>




