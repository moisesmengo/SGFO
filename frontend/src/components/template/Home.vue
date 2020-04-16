<template >
   <div class="home">
       <div v-show="!user || undefined">
           <b-row>
               <b-col md="8" sm="12">
                   <div class="text-information">
                        <p>
                            Ajude o IFRN a conseguir matéria prima para a confecção de 
                            produtos de higiene pessoal.
                        </p>
                   </div>
               </b-col>
               <b-col md="4" sm="0"></b-col>
           </b-row>
           <b-row>
               <b-col md="8" sm="12">
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
               <b-col md="4" sm="0">
                   <img :src="quimica" class="img" alt="Vidrarias">
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
                main="Bem vindo a essa mizera"
                v-show="provider"
            />
       </div>

   </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError, providerKey } from '../../global'
import Titles from './Titles'
import { mapState } from 'vuex'
import Stat from '../admin_pages/Stat'
import quimica from '../../asets/quimica.png'
import '../../asets/pages-home-global-styles.css'

export default {
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
    .stats{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    @media only screen and (max-device-width: 700px) {
        .text-information p{
            font-size: 12px;
        }
        .home .img{
            display: none;
        }
    }
</style>