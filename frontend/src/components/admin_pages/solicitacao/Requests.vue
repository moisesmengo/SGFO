<template>
    <div>
        <transition name="slide-fade" mode="out-in">
            <div class="format-data" v-show="mode === 'view' || mode === 'remove'" v-if="show">
                <b-form>
                    <b-row>
                        <b-col md="6" sm="12">
                            <b-form-group label="Nome do Estabelecimento:">
                                <b-form-input
                                    v-model="fornecedor.estabelecimento"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6" sm="12">
                            <b-form-group label="E-mail: " >
                                <b-form-input
                                    v-model="fornecedor.email"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6" sm="12">
                            <b-form-group label="Telefone: " >
                                <b-form-input
                                    v-model="fornecedor.telefone"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6" sm="12">
                            <b-form-group label="Funcionário responsável:" >
                                <b-form-input
                                    v-model="fornecedor.responsavel"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="4" sm="12" >
                            <b-form-group label="Cidade:">
                                <b-form-input
                                    v-model="fornecedor.cidade"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="2" sm="12" >
                            <b-form-group label="Estado:" >
                            <b-form-input                                
                                    v-model="fornecedor.estado"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6" sm="12" >
                            <b-form-group label="Endereço:" >
                                <b-form-input
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                    v-model="fornecedor.endereco"
                                />
                            </b-form-group>
                        </b-col>
                        <input type="hidden" :v-model="fornecedor.bloqueado = false">
                    </b-row>
                    <b-row>
                        <b-col md="6" sm="12">
                            <b-form-group label="Ponto de referência:" >
                                <b-form-input
                                    v-model="fornecedor.referencia"
                                    :readonly="mode === 'remove' || mode=== 'view'" 
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col xs="12">
                            <b-button 
                                @click="reset"
                                class="mr-2" 
                            >Cancelar</b-button>
                            <b-button 
                                variant="danger" 
                                @click="remove"
                                class="mr-2" 
                            >Rejeitar</b-button>
                            <b-button 
                                variant="success" 
                                @click="acept"
                            >Aceitar</b-button>
                        </b-col>
                    </b-row>
                </b-form>
                <hr>
            </div>
        </transition>
 
        <transition >
            <div class="content-table-provider">
                <div class="filter-and-title-provider"> 
                    <h3>Novas Solicitações</h3> 
                    <div class="provider-filter">
                        <i class="fa fa-search"></i>
                        <input type="text" 
                            placeholder="Buscar" 
                            class="filter-field"
                        >
                    </div>
                </div>
                <div class="table-provider">
                    <b-table
                        hover striped 
                        :items="fornecedores" 
                        :fields="fields">
                        <template slot="acoes" slot-scope="data">
                            <b-button variant="success" @click="loadProvider(data.item, 'view')">
                                <i class="fa fa-eye"></i>
                            </b-button>
                        </template>
                    </b-table>
                </div>
                
                <div class="content-pages-provider" >
                    <b-pagination size="md"
                        v-model="page"
                        :total-rows="count"
                        :per-page="limit"
                    ></b-pagination>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { baseApiUrl, showError } from '../../../global'
import '../../../asets/animations/slide-fade.css'
import axios from 'axios'
export default {
    name: 'Providers',
    data() {
        return {
            show: true,
            search: '',
            mode: null,
            fornecedor: {},
            fornecedores: [],
            fields:[
                {key: 'id', label: 'Código', sortable: true},
                {key: 'estabelecimento', label: 'Estabelecimento', sortable: true},
                {key: 'cidade', label: 'Cidade', sortable: true},
                {key: 'email', label: 'E-mail', sortable: true},
                {key: 'acoes', label: 'Ações'},
            ],
            page: 1,
            limit: 0,
            count: 0,
        }
    },
    methods:{
        loadProviders(){
            const url = `${baseApiUrl}/solicitacoes?page=${this.page}`
            axios.get(url).then(res => {           
                this.fornecedores = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        reset(){
            this.mode = null
            this.loadProviders()
        },
        loadProvider(fornecedor, mode = null){
            this.mode = mode
            axios.get(`${baseApiUrl}/fornecedores/${fornecedor.id}`)
                .then(res=> this.fornecedor = res.data)
        },
        acept(){
            const id = this.fornecedor.id
            axios.put(`${baseApiUrl}/solicitacoes/${id}`, this.fornecedor)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove(){
            const id = this.fornecedor.id
            axios.delete(`${baseApiUrl}/solicitacoes/${id}`, this.fornecedor)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        }
    },
    watch:{
        page(){
            this.loadProviders()
        }
    },
    mounted(){
        this.loadProviders()
    }
}
</script>
<style lang="css">
    .content-table-provider {
        display: flex;
        flex-direction: column;   
    }
    .filter-and-title-provider{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 20px ;
    }
    .content-pages-provider{
        display: flex;
        justify-content: center;
    }
    .filter-and-title-provider input{
        width: 40%;
    }
    .provider-filter{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #aaa;
    }
   .provider-filter i{
       color: #aaa;
       margin-right: 10px;
   }

   .provider-filter input{
       color: #ccc;
       font-size: 1.3rem;
       border:0;
       outline: 0;
       width: 100%;
   }
 
</style>