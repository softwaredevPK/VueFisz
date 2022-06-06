<template>
    <div v-if="!editMode" class="flashcard element">
        <strong class="flashcard name">{{frontText}} | {{backText}}</strong>
        <ul>
            <li class="flashcard-modify">
                <li class="edit" @click="editMode = !editMode"><img src="@/assets/edit.png" alt="edytuj"/></li>
                <li class="edit" @click="deleteFlashcard(id)"><img src="@/assets/bin.png" alt="usuń"/></li>
            </li>
        </ul>
    </div>
    <div v-else class="flashcard element">
        <form @submit.prevent='editFlashcard(id)'>
            <input type='text' name='front' v-model='frontText'>
            <input type='text' name='back' v-model='backText'>
            <button type='submit'>Zapisz zmianę</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    const props = defineProps(['frontText', 'backText', 'id']);
    const emit = defineEmits(['remove'])
    const editMode = ref(false)
   
    function deleteFlashcard(id) {
        axios
            .delete(`/api/v1/flashcards/${id}`)
            .then(response => {
                this.emit('remove')
            })
    }   

    function editFlashcard(id) {
        const formData = {
                front: this.props.frontText,
                back: this.props.backText,
            }
        console.log(formData)
        axios
            .put(`/api/v1/flashcards/${id}`, formData)
            .then(response => {
                editMode.value = false
            })
    }
</script>
    
<style scoped>
.flashcard.element{
    border: 1px solid #c1c1c1;
    margin-bottom: 20px;
    border-radius: 25px;
    padding: 15px 15px 15px 30px;
    display: flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
}

.flashcard strong{
    flex: 1;
}

.flashcard ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

ul img{
    max-width: 25px;
}
</style>