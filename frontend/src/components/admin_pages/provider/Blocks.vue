<template>
    <div>
        <h1>Bronquiados</h1>
        <ul>
            <li v-for="block in bloqueados" :key="block.id">
                {{block.estabelecimento}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl} from '../../../global'

export default {
    name: 'Blocks',
    data() {
        return {
            page: 1,
            limit: 0,
            count: 0,
            bloqueados: []
        }
    },
    methods:{
        get(){
            axios.get(`${baseApiUrl}/bloqueios?page=${this.page}`, this.bloqueados)
                .then(res => {
                    this.bloqueados = res.data.data
                    this.count = res.data.count
                    this.limit = res.data.limit
                })
        }
    },
    mounted(){
        this.get()
    }
}
</script>
<style lang="css">
    
</style>