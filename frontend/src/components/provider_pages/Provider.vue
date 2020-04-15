<template>
    <div class="provider-content">
        <Titles
            icon="user"
            main="Bem vindo a essa merda"
            v-if="fornecedor"
       />
    </div>
</template>
<script>
import Titles from '../template/Titles'
import { mapState } from 'vuex'

export default {
    name: 'Provider',
    components: { Titles },
    computed:{
        ...mapState({ fornecedor: 'fornecedor'})
    }
}
</script>
<style lang="css">
    
</style>