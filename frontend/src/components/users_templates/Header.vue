<template>
    <header class="header">
        <v-toolbar app>
        <a class="toggle" @click="toggleMenu" v-if="hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>

        <v-spacer v-show="logado"></v-spacer>

        <v-toolbar-title class="headline text-uppercase mr-4">
            <span class="font-weight-light title" > {{ title }} </span>
        </v-toolbar-title>

        <v-toolbar-items v-show="!logado">
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/contato">Contato</v-btn>
            <v-btn flat to="/sobre">Sobre</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items v-show="!logado">
            <v-btn flat to="/administracao">Área do Administrador</v-btn>
        </v-toolbar-items>

        <v-toolbar-items>
            <v-menu offset-y>
                <v-btn flat slot="activator" 
                    v-if="admin && logado"
                >{{adm.nome}}</v-btn>

                <v-btn flat slot="activator" 
                    v-if="!admin && logado"
                >{{fornecedor.nome}}</v-btn>

                <v-list>
                    <a href="" class="menu-user-component">
                        <v-list-tile>
                            Perfil
                        </v-list-tile>
                    </a>
                    <a href="" class="menu-user-component"> 
                        <v-list-tile>
                            Configurações
                        </v-list-tile>
                    </a>
                    <a href="" class="menu-user-component"> 
                        <v-list-tile>
                            Sair
                        </v-list-tile>
                    </a>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean,
        admin: Boolean,
    },
    computed: {
        ...mapState({
            adm: 'admin',
            fornecedor: 'fornecedor',
            logado: 'logado'
        }),
        icon(){
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down" 
        }, 
        
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

    .menu-user-component{
        text-decoration: none;
        color: #000;
    }

    .v-list__tile:hover{
        background-color:#8C9EFF ;
        color: #fff;
    }
    
</style>