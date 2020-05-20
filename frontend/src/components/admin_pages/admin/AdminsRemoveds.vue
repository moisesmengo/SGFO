<template>
    <div class="admins-revodes">
        <h1>Removiods</h1>
        <ul>
            <li v-for="rm in removidos" :key="rm.id">
                {{rm.nome}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl} from '../../../global'
export default {
   name: 'AdminRemoveds', 
   data() {
       return {
           page: 1,
           limit: 0,
           count: 0,
           removidos: []
       }
   }, 
   methods: {
       get(){
           axios.get(`${baseApiUrl}/exclusoes?page=${this.page}`, this.removidos)
            .then(res => {
                this.removidos = res.data.data
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