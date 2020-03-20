<template>
    <aside class="menu" v-show="isMenuVisible">
        <v-layout mt-4 column align-center>
            <v-flex>
                <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" >
                </v-avatar>
                <p class="white--text mt-3 ">Moisés</p>
            </v-flex>
        </v-layout>
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
        background: linear-gradient(to right, #263238, #455A64);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>