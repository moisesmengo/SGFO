<template>
    <header class="header">
        <v-toolbar app class="teal lighten-2 white--text" >
            <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
                <i class="material-icons" :class="icon">{{icon}}</i>
            </a>

            <v-spacer v-if="admin || fornecedor"></v-spacer>

            <v-toolbar-title class="headline text-uppercase mr-4 ">
                <span class="font-weight-light title" > 
                <router-link to="/">{{ title }}</router-link> </span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items v-if="!admin || !fornecedor">
                <v-btn flat to="/administracao" class="white--text">Área do Administrador</v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="logout-content" v-if="admin || fornecedor">
                <a href="" class="logout" @click.prevent="logout">
                    <i class="material-icons">exit_to_app</i>
                </a>
            </v-toolbar-items>
        </v-toolbar>
    </header>
</template>
<script>
import { mapState } from 'vuex'
import { adminKey, providerKey } from '../../global'

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
            if(this.admin){
                localStorage.removeItem(adminKey)
                this.$store.commit('setAdmin', null)
                this.$router.push({ name: 'login-admin'})
            }
            if (this.fornecedor){
                localStorage.removeItem(providerKey)
                this.$store.commit('setProvider', null)
                this.$router.push({ name: '/'})
            }
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
    .logout-content{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        height: 100%;
    }
    .logout-content .logout{
        width: 60px;
        height: 100%;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
    }

    .logout-content .logout:hover{
        background-color: rgba(0, 0, 0, 0.158);
    }
</style>