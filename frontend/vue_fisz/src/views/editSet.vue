<template>
<h2>Edycja zestawu</h2>

<form @submit.prevent='submitForm'>
            <small v-if="setname_error" class="err-info">{{setname_error_msg}}</small>
            <input type='text' name='text' placeholder="Podaj nazwę zestawu..." v-model="name" :class="{'is-invalid': setname_error }">
            <button type='submit'>Zapisz</button>
        </form>
</template>

<script>
import connection from "../connection";
import axios from 'axios'
export default {
    name: "CreateSet",
    data(){
        return {
            name: '',
            error: '',
            setname_error_msg: '',
            setname_error: false,
            axios: connection.axios
        }
    },
    methods: {
        submitForm(e){

            const formData = {
                name: this.name
            }
            const setID = this.$route.params.id;
            this.axios
                .patch(`/api/v1/sets/${setID}/`, formData)
                .then(
                    res => {
                        this.$router.push('/sets');
                    }
                )
                .catch(err=>{
                    this.error = err.response.data.name[0];
                    this.setname_error_msg = this.error;
                    this.setname_error = true;
                })
        },
        getName() {
            const setID = this.$route.params.id;
            axios
                .get(`/api/v1/sets/${setID}/`, {name: this.name})
                .then(response => {
                    this.name = response.data.name
                })
        }
    },
      beforeMount() {
        this.getName();
    }
}
</script>