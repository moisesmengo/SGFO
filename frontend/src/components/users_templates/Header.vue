<template>
    <header class="header">
        <v-toolbar app class="teal lighten-2 white--text" >
            <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
                <i class="material-icons" :class="icon">{{icon}}</i>
            </a>

            <v-toolbar-title class="headline text-uppercase mr-4">
                <span class="font-weight-light title" > 
                <router-link to="/">{{ title }}</router-link> </span>
            </v-toolbar-title>

            <v-toolbar-items v-if="!admin">
                <v-btn flat to="/" class="white--text">Início</v-btn>
                <v-btn flat to="/contato" class="white--text">Contato</v-btn>
                <v-btn flat to="/sobre" class="white--text">Sobre</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items v-if="!admin">
                <v-btn flat to="/administracao" class="white--text">Área do Administrador</v-btn>
            </v-toolbar-items>

            <v-toolbar-items>
                <v-menu offset-y class="user-area-menu" v-if="admin">
                    <v-btn flat slot="activator" 
                        class="white--text"
                    >{{admin.nome}}</v-btn>

                    <v-list>
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
                        <router-link to="" class="menu-user-component" >
                            <v-list-tile @click.prevent="logout">
                                Sair
                            </v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </header>
</template>
<script>
import { mapState } from 'vuex'
import { adminKey } from '../../global'

export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean,
    },
    computed: {
        ...mapState({
            admin: 'admin',
            fornecedor: 'fornecedor',
        }),
        icon(){
            return this.$store.state.isMenuVisible ? "menu_open" : "menu" 
        }, 
        
    },
    methods: {
        toggleMenu(){
            this.$store.commit('toggleMenu')
        },
        logout(){
            localStorage.removeItem(adminKey)
            this.$store.commit('setAdmin', null)
            this.$router.push({ name: 'login-admin'})
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