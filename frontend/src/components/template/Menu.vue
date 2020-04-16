<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-items">
            <ul v-if="admin">
                <li>
                    <router-link to="/">
                        <div class="content-list-menu">
                            <i class="material-icons">home</i>
                            <p>Início</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/configuracoes">
                        <div class="content-list-menu">
                            <i class="material-icons">settings</i>
                            <p>Configurações</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/fornecedores">
                        <div class="content-list-menu">
                            <i class="material-icons">group</i>
                            <p>Fornecedores</p>
                        </div>
                    </router-link>
                </li>
            </ul>

            <ul v-if="fornecedor">
                <li>
                    <router-link to="/">
                        <div class="content-list-menu">
                            <i class="material-icons">home</i>
                            <p>Início</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/configuracoes">
                        <div class="content-list-menu">
                            <i class="material-icons">settings</i>
                            <p>Alguma coisa</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/fornecedores">
                        <div class="content-list-menu">
                            <i class="material-icons">group</i>
                            <p>Coisa nenhuma</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed:{
        ...mapState(['isMenuVisible', 'admin', 'fornecedor']),
    },
    data() {
        return {
           
        }
    },
}
</script>
<style lang="css">
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #276DB1, rgb(46, 116, 185));
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .menu-items{
        margin: 15px 0 0 0;
    }
   .menu .menu-items ul{
       list-style: none;
       padding: 0;
   }
   .menu .menu-items{
       display: flex;
       flex-direction: column;
   }
   .menu .menu-items ul li .content-list-menu{
       display: flex;
       flex-direction: row;
       justify-content: start;
       padding: 15px 15px 10px 15px;
   }
   .menu .menu-items ul li .content-list-menu:hover{
       text-decoration: none;
       background: #9FC3E6;
   }
   .menu .menu-items ul li a{
       text-decoration: none;
   }
   .menu .menu-items ul li a:hover{
       text-decoration: none;
   }
   .menu .menu-items ul li .content-list-menu p{
       font-size: 1.3rem;
       padding-left: 15px;
       color: #fff;
   }
   .menu .menu-items ul li .content-list-menu i{
       color: #fff;
   }
</style>