<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-items">
            <ul class="mainmenu">
                <li><router-link to="/">Início</router-link></li> 
                <li><router-link to="/configuracoes">Configurações</router-link></li> 
                <!--<li><a href="#"><i class="fa fa-home"></i> O que Fazemos?</a> 
                <ul class="submenu"> 
                    <li><a href="#">Web Design</a></li> 
                    <li><a href="#">Hospedagem</a></li> 
                    <li><a href="#">SEO</a></li> 
                    <li><a href="#">Sistemas</a></li> 
                </ul> 
                </li>-->
                <li><router-link to="/fornecedores">Fornecedores</router-link></li> 
            </ul>
        </div>
    </aside>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed:{
        ...mapState(['isMenuVisible']),
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
        background: linear-gradient(to right, #263238, #455A64);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .menu-items{
        margin-top: 20px;
    }
    
    .menu-items ul{
        list-style: none;
        margin: 0;
        padding:0;
        font-size: 1.2rem;
    }

    .mainmenu a {
        display: block;
        text-decoration: none;
        padding: 10px;
        color: #fff;
    }

    .mainmenu li a i {
        color: rgb(224, 221, 21);
    }

    .mainmenu a:hover {
        background-color: rgba(42, 173, 155, 0.068);
        color: rgb(255, 255, 255);
        text-decoration: none;
    }

    .mainmenu li:hover .submenu {
        display: block;
        max-height: 200px;
    }

    .submenu a {
        background-color: rgba(175, 174, 174, 0.192);
        font-size: 1.0rem
    }

    .submenu a:hover {
        background-color: rgba(114, 206, 183, 0.651);
    }

    .submenu {
        overflow: hidden;
        max-height: 0;
        -webkit-transition: all 0.5s ease-out;
    }

</style>