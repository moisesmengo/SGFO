<template >
   <div class="home">
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

       <div class="auth-modal" v-show="!admin">
            <img src="../../../public/oleo.jpg" width="200" class="logo">
            <hr>

            <div class="auth-title">
                {{ showSignup ? 'Cadastre-se como fornecedor' : 'Faça login'}}
            </div>

            <input v-if="showSignup" v-model="fornecedor.nome" required type="text" name="nome" placeholder="Nome">
            <input type="email" name="email" v-model="fornecedor.email" required placeholder="E-mail">
            <input v-if="showSignup" name="cidade" type="text" v-model="fornecedor.cidade" required placeholder="Cidade">
            <input v-if="showSignup" type="text" name="estado" v-model="fornecedor.estado" required placeholder="Estado">
            <input v-if="showSignup" type="text" name="endereco" placeholder="Endereço" v-model="fornecedor.endereco" required>
            <input type="password" name="senha" placeholder="Senha" v-model="fornecedor.senha" required>
            <input v-if="showSignup" name="confirmarSenha" type="password" v-model="fornecedor.confirmarSenha" required placeholder="Confirme a Senha">

            <button v-if="showSignup" @click="salvar">Cadastrar</button>
            <button v-else @click="signin">Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já é fornecedor? Acesse o Login!</span>
                <span v-else>Ainda não é fornecedor? Registre-se aqui!</span>
            </a>

        </div>
   </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError, providerKey } from '../../global'
import Titles from './Titles'
import { mapState } from 'vuex'
import Stat from '../users_templates/admin_pages/Stat'

export default {
    data() {
        return {
            showSignup: true,
            fornecedor: {},
        }
    },
    computed:{
        ...mapState({
            admin: 'admin',
            provider: 'fornecedor',
            logado: 'logado'
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
                    this.$router.push({ path: '/fornecedor' })
                }).catch(showError)
                
        },
    }
}
</script>
<style lang="css">

    .auth-modal{
        background-color:#fff ;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        margin-right: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title{
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 1px;
        margin-bottom: 15px;
    }

    .auth-modal input{
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .stats{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .auth-modal button{
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 25px;
        text-decoration: none;
        color: #000;
    }

    .auth-modal a:hover{
        background-color: #4DB6AC;
        color: #fff;
    }

    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, 
            rgba(120, 120, 120, 0), 
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0)
            );
    }

    .auth-modal .logo{
        margin-bottom: 5px;
    }

</style>