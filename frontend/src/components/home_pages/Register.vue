<template>
    <div class="register-content">
        <div class="container">
            <div class="content-form">
                <h1 class="title-info">Registre-se</h1>
                <hr>
                <b-row>
                    <b-col md="6" sm="12">
                        <div class="form-group">
                            <label for="nome">Nome:</label>
                            <input placeholder="Digite seu nome" v-model="fornecedor.nome">
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" placeholder="Digite seu e-mail" v-model="fornecedor.email">
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha:</label>
                            <input type="password" placeholder="Digite sua senha" v-model="fornecedor.senha">
                        </div>
                        <div class="form-group">
                            <label for="confirmarSenha">Confirmar senha:</label>
                            <input type="password" placeholder="Confirme sua senha" v-model="fornecedor.confirmarSenha">
                        </div>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-row>
                            <b-col md="8" sm="8">
                                <div class="form-group">
                                    <label for="cidade">Cidade:</label>
                                    <input placeholder="Digite sua cidade" v-model="fornecedor.cidade">
                                </div>
                            </b-col>
                            <b-col md="4" sm="4">
                                <div class="form-group">
                                    <label for="estado">Estado:</label>
                                    <input placeholder="UF" v-model="fornecedor.estado">
                                </div>
                            </b-col>
                        </b-row>
                        <div class="form-group">
                            <label for="endereco">Endereço:</label>
                            <input placeholder="Digite seu endereço" v-model="fornecedor.endereco">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone:</label>
                            <input placeholder="Digite seu telefone" v-model="fornecedor.telefone">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Foto:</label>
                            <input 
                                type="file" 
                                ref="input" 
                                class="d-none"  
                                accept="image/*"
                                @change="handleFile($event)"
                            >
                            <button 
                                type="button"
                                @click="openFileDialog"
                            >Adcionar imagem</button>
                            <div class="image-name" v-if="imagemUrl" >
                                {{imagemUrl.name}}
                                <button type="button" class="btn badge badge-light" @click="imagemUrl = null">
                                    <i class="fa fa-trash text-danger"></i>
                                </button>
                            </div>
                        </div>
                    </b-col> 
                </b-row>
                <div class="content-button">
                    <button type="submit" class="button" @click.prevent="save">CADASTRAR</button>
                </div>
                <router-link to="/" class="register">Volte e faça login</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError, providerKey } from '../../global'
import { mapState } from 'vuex'

export default {
    name: 'Register',
    data() {
        return {
            imagemUrl: '',
            fornecedor: {}
        }
    },
    computed:{
        ...mapState({
            provider: 'fornecedor'
        }),
        fileName(){
            if (imagemUrl) {
                const split = imagemUrl.name.split['.']
                return `${split[0]}-${new Date().getTime()}.${split[1]}`
            } else {
                return ''
            }
        }
    },
    methods:{
        openFileDialog(){
            this.$refs.input.value = null
            this.$refs.input.click()
        },
        handleFile({target}){
            this.imagemUrl = target.files[0]
        },
        reset(){
            this.fornecedor = {}
        },
        save(){
            axios.post(`${ baseApiUrl }/fornecedores`, this.fornecedor)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        }
    },
    mounted() {
        console.log(this.fornecedor)
    },
}
</script>
<style lang="css">
    .register-content .content-button{
        width: 60%;
        display: flex;
        justify-content: center;
        align-self:center;
    }
    @media only screen and (max-device-width: 700px) {
        .register-content .content-button{
            width: 100%;
        }
    }
</style>