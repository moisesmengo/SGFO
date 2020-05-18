<template>
  <div class="nav-menu">
      <nav v-show="!user || undefined">
        <ul>
            <li class="active">
                <router-link to="/">Início</router-link>
            </li>
            <li>
                <router-link to="/sobre">Sobre</router-link>
            </li>
            <li>
                <router-link to="/contato">Contato</router-link>
            </li>
            <li>
                <router-link to="/administracao">Administração</router-link>
            </li>
        </ul>
  </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "Nav",
    computed:{
        ...mapState({
            user: 'user',
        }),
    },
}
</script>
<style lang="css">
    .nav-menu nav ul, nav li{
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
    }
    .nav-menu nav ul{
        display: flex;
    }
    .nav-menu{
        grid-area: nav;
        background: linear-gradient(to right, #9FC3E6, rgb(189, 214, 240));
        color: #0D0D0D;
        height: 40px;
        width: 100%;
    }
    .nav-menu nav{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .nav-menu nav a{
        display: block;
        padding-left: 15px;
        padding-right: 10px;
        line-height: 40px;
        text-decoration: none;
        text-transform: uppercase;
        color:rgb(58, 57, 59) ;
        font-family: Lato;
    }

    .nav-menu nav ul li a:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 500px){
        .nav-menu nav{
            justify-content: center;
            align-items: center;
        }
        .nav-menu nav ul{
            font-size: 0.8rem;
        }
    }
</style>