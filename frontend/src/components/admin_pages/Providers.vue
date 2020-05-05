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
                                variant="danger" 
                                v-if="mode === 'remove'"
                                @click="remove"
                                class="mr-2" 
                            >Bloquear</b-button>
                            <b-button 
                                @click="reset"
                            >Cancelar</b-button>
                        </b-col>
                    </b-row>
                </b-form>
                <hr>
            </div>
        </transition>
 
        <transition >
            <div class="content-table-provider">
                <div class="filter-and-title-provider"> 
                    <h3>Fornecedores cadastrados</h3> 
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
                            <b-button variant="danger" @click="loadProvider(data.item, 'remove')" class="mr-2">
                                <i class="fa fa-lock"></i>
                            </b-button>
                            <b-button variant="success" @click="loadProvider(data.item, 'view')">
                                <i class="fa fa-eye"></i>
                            </b-button>
                        </template>
                    </b-table>
                </div>
                <div class="content-pages-provider">
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
import { baseApiUrl, showError } from '../../global'
import '../../asets/animations/slide-fade.css'
import axios from 'axios'
export default {
    name: 'Providers',
    components:{ },
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
            const url = `${baseApiUrl}/fornecedores?page=${this.page}`
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
        remove(){
            const id = this.fornecedor.id
            axios.delete(`${baseApiUrl}/fornecedores/${id}`)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadProvider(fornecedor, mode = null){
            this.mode = mode
            axios.get(`${baseApiUrl}/fornecedores/${fornecedor.id}`)
                .then(res=> this.fornecedor = res.data)
        },
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
    .image-and-name{
        background-color: rgba(107, 106, 106, 0.103);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 8px;
    } 
    .image-and-name span{
        margin-top: 10px;
    }
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