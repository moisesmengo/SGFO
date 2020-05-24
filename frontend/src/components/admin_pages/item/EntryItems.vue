<template>
    <div class="entry-items">
        <form>
            <input type="hidden" v-model="entrada.id">
            
            <input type="number" v-model="entrada.quantidadeOleo">
            <input type="number" v-model="entrada.itemId">
            <input type="number" v-model="entrada.quantidadeEsperada">
            <input type="number" v-model="entrada.quantidadeReal">

            <button type="button" @click="save">salvar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl, showError} from '../../../global'
export default {
    name: 'EntryItems',
    data() {
        return {
            entrada: {},
            entradas: [],
            page: 1,
            limit: 0,
            count: 0,
        }
    },
    methods:{
        save(){
            axios.post(`${baseApiUrl}/entradas`, this.entrada)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                }).catch(showError)       
        },
    }
}
</script>