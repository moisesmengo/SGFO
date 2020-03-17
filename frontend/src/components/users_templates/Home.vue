<template >
    <v-layout class="blue darken-3 home-content" row wrap> 
        <Titles icon="fa fa-home" main="teste"></Titles>    
        <div class="auth-modal">
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
    </v-layout>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError, providerKey } from '../../global'
import Titles from './Titles'
export default {
    data() {
        return {
            showSignup: true,
            fornecedor: {},
        }
    },
    components:{ Titles },
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
    .home-content{
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
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

    .auth-modal button{
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 25px;
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