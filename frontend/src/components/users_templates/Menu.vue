<template>
    <aside class="menu" v-show="isMenuVisible">
        
    </aside>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>
<style lang="css">
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #536DFE, #8C9EFF);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>