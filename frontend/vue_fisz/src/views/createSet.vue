<template>
<h2>Utwórz nowy zestaw</h2>

<form @submit.prevent='submitForm'>
            <small v-if="setname_error" class="err-info">{{setname_error_msg}}</small>
            <input type='text' name='text' placeholder="Podaj nazwę zestawu..." v-model="name" :class="{'is-invalid': setname_error }">
            <button type='submit'>Dodaj zestaw</button>
        </form>
</template>

<script>
import connection from "../connection";
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

            this.axios
                .post('/api/v1/sets/', formData)
                .then(
                    res => {
                        this.$router.push('/dashboard');
                    }
                )
                .catch(err=>{
                    this.error = err.response.data.name[0];
                    this.setname_error_msg = this.error;
                    this.setname_error = true;
                })

        }
    }
}
</script>