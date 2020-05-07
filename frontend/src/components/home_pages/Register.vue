<template>
    <div class="register-content">
        <div class="main-content">
            <div class="content-form w-100 p-3">
                <h1 class="title-info ">Solicite seu registro</h1>
                <hr>
                <form>
                    <b-row>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="estabelecimento">Nome do estabelecimento: *</label>
                                <input type="text" v-model="fornecedor.estabelecimento" placeholder="Digite o nome do estabelecimento">
                            </div>
                        </b-col>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="email">E-mail: *</label>
                                <input type="email" v-model="fornecedor.email" placeholder="Informe um email">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="senha">Senha: *</label>
                                <input type="password" v-model="fornecedor.senha" placeholder="Digite sua senha">
                            </div>
                        </b-col>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="senha">Confirmar senha: *</label>
                                <input type="password" v-model="fornecedor.confirmarSenha" placeholder="Confirme sua senha">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="telefone">Telefone: *</label>
                                <input type="text" v-model="fornecedor.telefone" placeholder="Informe um telefone">
                            </div>
                        </b-col>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="responsavel">Funcionário responsável: *</label>
                                <input type="text" v-model="fornecedor.responsavel" placeholder="Informe um funcionário responsável">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="4" sm="12">
                            <div class="form-group">
                                <label for="cidade">Cidade: *</label>
                                <input type="text" v-model="fornecedor.cidade" placeholder="Informe a cidade">
                            </div>
                        </b-col>
                        <b-col md="2" sm="12">
                            <div class="form-group">
                                <label for="estado">Estado: *</label>
                               <b-form-select 
                                    v-model="fornecedor.estado" 
                                    :options='states'
                                    id="select-state-register-provider"
                                    >
                                </b-form-select>
                            </div>
                        </b-col>
                        <b-col md="6" sm="12">
                            <div class="form-group">
                                <label for="referencia">Ponto de referência: *</label>
                                <input type="text" v-model="fornecedor.referencia" placeholder="Informe um ponto de referência">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="12" md='12'>
                            <div class="form-group">
                                <label for="endereco">Endereço: *</label>
                                <input type="text" v-model="fornecedor.endereco" placeholder="Informe o endereço">
                            </div>
                        </b-col>
                    </b-row>
                </form>
                <button class="button" @click.prevent="save()" >SOLICITAR</button>
                <router-link to="/" class="register">Volte para a página inicial</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError } from '../../global'

export default {
    name: 'Register',
    data() {
        return {
            imagemUrl: '',
            fornecedor: {},
            states:[
               {value: "AC", text: 'AC'},
               {value: "AL", text: 'AL'},
               {value: "AP", text: 'AP'},
               {value: "AM", text: 'AM'},
               {value: "BA", text: 'BA'},
               {value: "CE", text: 'CE'},
               {value: "DF", text: 'DF'},
               {value: "ES", text: 'ES'},
               {value: "GO", text: 'GO'},
               {value: "MA", text: 'MA'},
               {value: "MT", text: 'MT'},
               {value: "MS", text: 'MS'},
               {value: "MG", text: 'MG'},
               {value: "PA", text: 'PA'},
               {value: "PB", text: 'PB'},
               {value: "PR", text: 'PR'},
               {value: "PE", text: 'PE'},
               {value: "PI", text: 'PI'},
               {value: "RJ", text: 'RJ'},
               {value: "RN", text: 'RN'},
               {value: "RS", text: 'RS'},
               {value: "RO", text: 'RO'},
               {value: "RR", text: 'RR'},
               {value: "SC", text: 'SC'},
               {value: "SP", text: 'SP'},
               {value: "SE", text: 'SE'},
               {value: "TO", text: 'TO'},
           ],
        }
    },
    methods:{
       
        save(){
            axios.post(`${ baseApiUrl }/fornecedores`, this.fornecedor)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        }
    },
}
</script>
<style lang="css">

    #select-state-register-provider{
        height: 40px;
        border-radius: 8px;
        background-color: #fff;
        color: #88929C;
        padding: 0 15px;
        border: 1px solid #2a3756;
    }
    @media only screen and (max-device-width: 700px) {
        .register-content .content-button{
            width: 100%;
        }
    }
</style>