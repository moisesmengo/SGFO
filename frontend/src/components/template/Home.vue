<template >
   <div class="home">
       <div v-show="!user || undefined" class="main-content">
           <b-row >
               <b-col md="6" sm="12">
                   <img :src="quimica" class="img" alt="Vidrarias">
               </b-col>
               <b-col md="6" sm="12">
                   <div class="content-form">
                        <h1 class="title-info">Já é um fornecedor? Faça login</h1>
                        <hr>
                        <form>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="email" v-model="fornecedor.email" placeholder="Digite seu e-mail">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha:</label>
                                <input type="password" v-model="fornecedor.senha" placeholder="Digite sua senha">
                            </div>
                        </form>
                        <a class="remember-password" href="">Esqueceu sua senha?</a>
                        <button class="button" type="submit" @click.prevent="signin">ENTRAR</button>
                        <router-link to="/registro" class="register">Ainda não é fornecedor? Cadastre-se aqui</router-link>
                   </div>
               </b-col>
           </b-row>
       </div>
       <div v-show="user && admin">
           <Titles
                icon="home"
                main="Início"
                v-if="admin"
            />
        
            <div class="stats" v-if="admin">
                <Stat
                        title="Fornecedores" :value="10"
                        icon="supervised_user_circle" color="#E0F7FA"
                />
                <Stat
                        title="Óleo em Estoque" :value="10 + ' litros'"
                        icon="widgets" color="#EEFF41"
                />
                <Stat
                        title="Qualquer Coisa" :value="15"
                        icon="bug_report" color="#FF8A65"
                />
            </div>
       </div>
       <div v-show="user && provider">
           
           <Titles
                icon="home"
                main="Início"
                v-show="provider"
            />

            <b-card title="Bem Vindo"
                sub-title="Informe ao IFRN sempre que for necessário o recolhimento de matéria prima"
                class="card-provider"
            >
            
            </b-card>
            
       </div>

   </div>
</template>
<script>
import axios from 'axios'

import Titles from './Titles'
import Stat from '../admin_pages/Stat'

import { baseApiUrl, showError, providerKey } from '../../global'
import { mapState } from 'vuex'

import quimica from '../../asets/quimica.png'
import '../../asets/pages-home-global-styles.css'

export default {
    name: 'Home',
    data() {
        return {
            showSignup: true,
            fornecedor: {},
            quimica: quimica,
        }
    },
    computed:{
        ...mapState({
            user: 'user',
            admin: 'admin',
            provider: 'fornecedor'
        }),
    },
    components:{ Titles, Stat },
    methods:{
        reset(){
            this.fornecedor = {}
        },
        salvar(){
            axios.post(`${baseApiUrl}/fornecedores`, this.fornecedor)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        signin() {
            axios.post(`${baseApiUrl}/signinProvider`, this.fornecedor)
                .then(res => {
                    this.$store.commit('setProvider', res.data)
                    localStorage.setItem(providerKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                }).catch(showError)
                
        },
    }
}
</script>
<style lang="css">
    .card-provider{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .card-provider .card-title{
        font-size: 3rem;
        font-weight: 300;
        line-height: 1.2;
    }
    .card-provider .card-subtitle{
        font-size: 1.1rem;
    }
    .stats{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
  
</style>