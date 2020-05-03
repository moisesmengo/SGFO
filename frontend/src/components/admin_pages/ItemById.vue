<template>
    <div class="item-by-id">
        <p>{{item.nome}}</p>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
    name: 'ItemById',
    data: function() {
        return {
            item:{}
        }
    },
     mounted() {
        const url = `${baseApiUrl}/itens/${this.$route.params.id}`
        axios.get(url).then(res => this.item = res.data)
    },
}
</script>
<style lang="css">
    
</style>