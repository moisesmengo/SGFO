<template>
    <div class="new-provider">
        <h3>Cadastrar Fornecedor</h3>
        <hr>
        <b-form>
            <input id="provider-id" type="hidden" v-model="fornecedor.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome do Estabelecimento: *" label-for="estabelecimento">
                        <b-form-input
                            id="estabelecimento" type="text" 
                            placeholder="Informe o nome do estabelecimento"
                            v-model="fornecedor.estabelecimento"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail: *" label-for="email">
                        <b-form-input
                            id="email" type="email" 
                            placeholder="Informe um e-mail"
                            v-model="fornecedor.email"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha: *" label-for="senha">
                        <b-form-input
                            id="senha" type="password" 
                            placeholder="Informe uma senha provisória"
                            v-model="fornecedor.senha"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar senha: *" label-for="confirmar-senha">
                        <b-form-input
                            id="confirmar-senha" type="password" 
                            placeholder="Confirme a senha"
                            v-model="fornecedor.confirmarSenha"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Telefone: *" label-for="telefone">
                        <b-form-input
                            id="telefone" type="text" 
                            placeholder="Informe um telefone"
                            v-model="fornecedor.telefone"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Funcionário responsável: *" label-for="responsavel">
                        <b-form-input
                            id="responsavel" type="text" 
                            placeholder="Informe um funcionário responsável"
                            v-model="fornecedor.responsavel"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" sm="12" >
                    <b-form-group label="Cidade: *" label-for="cidade">
                        <b-form-input
                            id="cidade" type="text" 
                            placeholder="Informe a cidade"
                            v-model="fornecedor.cidade"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12" >
                    <b-form-group label="Estado: *" >
                        <b-form-select v-model="fornecedor.estado" :options='states'>
                        
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12" >
                    <b-form-group label="Endereço: *" label-for="endereco">
                        <b-form-input
                            id="endereco" type="text" 
                            placeholder="Informe seu endereço"
                            v-model="fornecedor.endereco"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Ponto de referência: *" label-for="referencia">
                        <b-form-input
                            id="referencia" type="text" 
                            placeholder="Informe um ponto de referência"
                            v-model="fornecedor.referencia"
                        />
                    </b-form-group>
                </b-col>
                <input type="hidden" :v-model="fornecedor.bloqueado = false">
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button 
                        variant="primary" 
                        @click.prevent="save"
                    >Salvar</b-button>
                    <b-button 
                        class="ml-2" 
                        @click.prevent="reset"
                    >Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl, showError} from '../../../global'

export default {
    name: 'NewProvider',
    data() {
        return {
           value: false,
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
           status:[
               {value: true, text: 'Bloqueado'},
               {value: false, text: 'Desbloqueado'},
           ]
        }
    },
    methods:{
        reset(){
            this.fornecedor = {}
        },
        save(){
            axios.post(`${baseApiUrl}/fornecedores`, this.fornecedor)           
                .then(() =>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        }
    }
    
}
</script>
<style lang="css">
    
</style>