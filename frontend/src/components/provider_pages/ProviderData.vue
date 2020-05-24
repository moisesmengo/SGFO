<template>
    <div class="provider-data">
        <h3>Meus Dados</h3>
        <hr>
        <b-form>
            <input id="fornecedor-id" type="hidden" v-model="fornecedor.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Estabelecimento:" label-for="estabelevimento">
                        <b-form-input
                            id="estabelevimento" type="text" v-model="fornecedor.estabelecimento"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Funcionário responsável:" label-for="responsavel">
                        <b-form-input
                            id="responsavel" type="text" v-model="fornecedor.responsavel"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="email">
                        <b-form-input
                            id="email" type="email"  v-model="fornecedor.email"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Telefone:" label-for="telefone">
                        <b-form-input
                            id="telefone" type="text" v-model="fornecedor.telefone"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Cidade:" label-for="cidade">
                        <b-form-input
                            id="cidade" type="text"  v-model="fornecedor.cidade"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Estado:" label-for="estado">
                        <b-form-input
                            id="estado" type="text" v-model="fornecedor.estado"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Endereço:" label-for="endereco">
                        <b-form-input
                            id="endereco" type="text"  v-model="fornecedor.endereco"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Ponto de referência:" label-for="referencia">
                        <b-form-input
                            id="referencia" type="text" v-model="fornecedor.referencia"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="senha">
                        <b-form-input
                            id="senha" type="password"  v-model="fornecedor.senha"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar senha:" label-for="confirmar-senha">
                        <b-form-input
                            id="confirmar-senha" type="text" v-model="fornecedor.confirmarSenha"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col md="6" sm="12">
                    <b-button 
                        class="mr-2"  
                        @click="reset" 
                    >Cancelar</b-button>
                    <b-button 
                    variant="success" 
                    v-if="mode === 'save'"
                    @click="save"
                    >Salvar</b-button>
                    <b-button 
                        variant="primary" 
                        v-if="mode === null"
                        @click="mode = 'save'"
                    >Editar</b-button> 
                </b-col>
                <b-col md="6" sm="12">
                    <b-button @click="remove">Excluir conta</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
import { baseApiUrl, showError } from '../../global'

export default {
    name: 'ProviderData',
    data() {
        return {
            mode: null,
            fornecedor: {}
        }
    },
    computed:{
        ...mapState({provider: 'fornecedor'})
    },
    methods:{
        reset(){
            this.mode = null
        },
        loadProvider(){
            axios.get(`${baseApiUrl}/fornecedores/${this.provider.id}`)
                .then(res=> this.fornecedor = res.data)
        },
        remove(){
            const id = this.provider.id
            axios.delete(`${baseApiUrl}/fornecedores/${id}`)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                }).catch(showError)
        },
    },
    mounted() {
        this.loadProvider()
    },
}
</script>
