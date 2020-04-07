<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="material-icons toggle" :class="icon">{{icon}}</i>
        </a>

        <h1 class="title">{{title}}</h1>

        <a href="" class="logout" @click.prevent="logout" v-if="!hideToggle">
            <i class="material-icons">exit_to_app</i>
        </a>
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
                this.$router.push({ name: 'administracao'})
            }
        }
    }
}
</script>
<style lang="css">
    .header{
        grid-area: header;
        
        background: linear-gradient(to right, #2A3756, rgb(82, 98, 134));

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header .title{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }
    header.header > a.toggle{
        width: 60px;
        height: 100%;
        justify-self: flex-start;
        color: #fff;
        text-decoration: none;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.header > a.toggle:hover{
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    .header .title a{
        color: #fff;
        text-decoration: none;
    }
    header.header > a.logout{
        width: 60px;
        height: 100%;
        justify-self: flex-end;
        color: #fff;
        text-decoration: none;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.header > a.logout:hover{
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
   
</style>