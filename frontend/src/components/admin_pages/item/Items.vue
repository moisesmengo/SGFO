<template>
    <div class="items">
        <h3 class="mb-3">Lista de itens</h3>
        <hr>
        <ul>
            <li v-for="item in items" :key="item.id">
                <item :item="item" />
            </li>
        </ul>
        
    </div>
</template>
<script>
import Item from './Item'
import axios from 'axios'
import { baseApiUrl } from '../../../global'

export default {
    name: 'Items',
    components: {Item},
    data() {
        return {
            items: [],
            item: {},
            page: 1,
            limit: 0,
            count: 0,
        }
    },
    methods:{
        getItems(){
            const url = `${baseApiUrl}/itens?page=${this.page}/${this.item.id}`
            axios(url).then(res => {
                this.items = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        }
    },
    mounted(){
        this.getItems()
    }
}
</script>
<style lang="css">
    .items ul {
        list-style-type: none;
        padding: 0px;
    }
</style>