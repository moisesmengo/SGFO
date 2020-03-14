<template>
    <header class="header">
        <v-toolbar app>
        <a class="toggle" @click="toggleMenu" v-if="hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>

        <v-toolbar-title class="headline text-uppercase mr-4 " >
            <span class="font-weight-light title"> {{ title }} </span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/contato">Contato</v-btn>
            <v-btn flat to="/sobre">Sobre</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat to="/administracao">Área do Administrador</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean,
    },
    computed: {
        icon(){
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down" 
        }
    },
    methods: {
        toggleMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>
<style lang="css">
    .header{
        grid-area: header;
        
        /*background: linear-gradient(to right, #7986CB, #C5CAE9);

        display: flex;
        justify-content: center;
        align-items: center;*/  
    }
    .header .toggle{
        width: 60px;
        height: 100%;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header .toggle:hover{
        background-color: rgba(0, 0, 0, 0.15);
    }
</style>