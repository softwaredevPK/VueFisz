<template>
    <div v-if="!editMode" class="flashcard element">
        <strong class="flashcard name">{{frontText}} | {{backText}}</strong>
        <ul>
                <li v-if="repeat_needed"><img src="@/assets/repeat.png" alt="powtórz"/></li>
                <li v-if="passed"><img src="@/assets/passed.png" alt="zaliczone"/></li>
                <li class="edit" @click="editMode = !editMode"><img src="@/assets/edit.png" alt="edytuj"/></li>
                <li class="edit" @click="deleteFlashcard(id)"><img src="@/assets/bin.png" alt="usuń"/></li>
        </ul>
    </div>
    <div v-else class="flashcard element">
        <form @submit.prevent='editFlashcard(id)'>
            <small v-if="front_error" class="err-info">{{front_error_msg}}</small>
            <input type='text' name='front' v-model='frontText' :class="{'is-invalid': front_error }">
            <small v-if="back_error" class="err-info">{{back_error_msg}}</small>
            <input type='text' name='back' v-model='backText' :class="{'is-invalid': back_error }">
            <button type='submit'>Zapisz zmianę</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios';
    import connection from "../connection";
    const props = defineProps(['frontText', 'backText', 'id', 'passed', 'repeat_needed']);
    const emit = defineEmits(['remove'])
    const editMode = ref(false)
    const back_error = ref(false)
    const front_error = ref(false)
    const back_error_msg = ref('')
    const front_error_msg = ref('')
    const myAxios = connection.axios
   
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
        myAxios
            .put(`/api/v1/flashcards/${id}/`, formData)
            .then(response => {
                editMode.value = false
                front_error.value = false;
                back_error.value = false;
            })
            .catch(error => {
                    let data = error.response.data
                    if ('front' in data) {
                        front_error.value = true;
                        front_error_msg.value = data.front[0]
                    }
                    else {
                        front_error.value = false;
                    }
                    if ('back' in data) {
                        back_error.value = true;
                        back_error_msg.value = data.back[0]
                    }
                    else {
                        back_error.value = false;
                    }
            }
        )
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
    max-width: 450px;
    width: 100%;
    box-sizing: border-box;
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