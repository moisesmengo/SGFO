<template>
    <header class="header">
        <v-toolbar app class="teal lighten-2 white--text" >
            <a class="toggle" @click="toggleMenu" v-if="hideToggle">
                <i class="material-icons" :class="icon">{{icon}}</i>
            </a>

            

            <v-toolbar-title class="headline text-uppercase mr-4">
                <span class="font-weight-light title" > 
                <router-link to="/">{{ title }}</router-link> </span>
            </v-toolbar-title>

            <v-toolbar-items v-show="!logado">
                <v-btn flat to="/" class="white--text">Início</v-btn>
                <v-btn flat to="/contato" class="white--text">Contato</v-btn>
                <v-btn flat to="/sobre" class="white--text">Sobre</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items v-show="!logado">
                <v-btn flat to="/administracao" class="white--text">Área do Administrador</v-btn>
            </v-toolbar-items>

            <v-toolbar-items >
                <v-menu offset-y class="user-area-menu">
                    <v-btn flat slot="activator" 
                        v-if="admin && logado" 
                        class="white--text"
                    >{{adm.nome}}</v-btn>

                    <v-btn flat slot="activator" 
                        v-if="!admin && logado"
                        class="white--text"
                    >{{fornecedor.nome}}</v-btn>

                    <v-list v-if="admin && logado">
                        <router-link to="/perfil-admin" class="menu-user-component">
                            <v-list-tile>
                                Perfil
                            </v-list-tile>
                        </router-link>
                        <router-link to="/configuracoes" class="menu-user-component">
                            <v-list-tile>
                                Configurações
                            </v-list-tile>
                        </router-link>
                        <router-link to="" class="menu-user-component">
                            <v-list-tile>
                                Sair
                            </v-list-tile>
                        </router-link>
                    </v-list>

                    <v-list v-if="!admin && logado">
                        <a href="" class="menu-user-component">
                            <v-list-tile>
                                Perfil cu
                            </v-list-tile>
                        </a>
                        <a href="" class="menu-user-component"> 
                            <v-list-tile>
                                Configurações cu
                            </v-list-tile>
                        </a>
                        <a href="" class="menu-user-component"> 
                            <v-list-tile>
                                Sair cu
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
            return this.$store.state.isMenuVisible ? "menu_open" : "menu" 
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
        background-color: rgba(0, 0, 0, 0.158);
    }

    .menu-user-component{
        text-decoration: none;
        color: #000;
    }
    .user-area-menu:hover{
        background-color: rgba(0, 0, 0, 0.158);
    }
    .v-list__tile:hover{
        background-color:#4DB6AC ;
        color: #fff;
    }
    .title a{
        color: #fff;
        text-decoration: none;
        font-size: 1.3rem;
    }
    .title a:hover{
        color: #fff;
        text-decoration: none;
    }
    .toggle i{
        background: none;
    }
    
</style>