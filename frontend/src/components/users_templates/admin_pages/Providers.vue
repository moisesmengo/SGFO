<template>
    <div>
        <Titles
            main="Fornecedores Cadastrados"
            icon="folder_shared"
        />

        <div class="format-data" v-show="mode === 'view' || mode === 'remove'">
            <b-row>
                <b-col md="4" sm="12">
                    <div class="image-and-name">
                        <img :src="fornecedor.imagemUrl" width="100px" height="150px" >
                        <span>{{fornecedor.nome}}</span>
                    </div>
                </b-col>
                <b-col md="8" sm="12">
                    <div class="data-form">
                        <b-form>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="E-mail:" label-for="provider-email">
                                        <b-form-input
                                            id="provider-email" type="text" 
                                            :readonly="mode === 'remove' || mode=== 'view'" 
                                            v-model="fornecedor.email"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="9" sm="12">
                                    <b-form-group label="Cidade:" label-for="provider-city">
                                        <b-form-input
                                            id="provider-city" type="text"                                            
                                            :readonly="mode === 'remove' || mode=== 'view'" 
                                            v-model="fornecedor.cidade"
                                        />       
                                    </b-form-group>
                                </b-col>
                                <b-col md="3" sm="12">
                                    <b-form-group label="Estado:" label-for="admin-estado">
                                        <b-form-input
                                            id="admin-estado" type="text"
                                            :readonly="mode === 'remove' || mode=== 'view'" 
                                            v-model="fornecedor.estado"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Endereço:" label-for="provider-address">
                                        <b-form-input
                                            id="provider-address" type="text"                                            
                                            :readonly="mode === 'remove' || mode=== 'view'" 
                                            v-model="fornecedor.endereco"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Telefone:" label-for="provider-phone">
                                        <b-form-input
                                            id="provider-phone" type="text"                                            
                                            :readonly="mode === 'remove' || mode=== 'view'" 
                                            v-model="fornecedor.telefone"
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
                    </div>
                </b-col>
            </b-row> 
        </div>
        <hr>

        <div class="content-table-provider">
            <div class="filter-and-title-provider"> 
                <h3>Fornecedores</h3> 
                <b-form-input :v-model="search" placeholder="Buscar..."></b-form-input>
            </div>
            <div class="table-provider">
                <b-table 
                    hover striped 
                    :items="fornecedores" 
                    :fields="fields">
                    <template slot="acoes" slot-scope="data">
                        <b-button variant="danger" @click="loadProvider(data.item, 'remove')" class="mr-2">
                            <i class="fa fa-trash"></i>
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
    </div>
</template>
<script>
import Titles from '../Titles'
import { baseApiUrl, showError } from '../../../global'
import axios from 'axios'
export default {
    name: 'Providers',
    components:{ Titles },
    data() {
        return {
            search: '',
            mode: null,
            fornecedor: {},
            fornecedores: [],
            fields:[
                {key: 'id', label: 'Código', sortable: true},
                {key: 'nome', label: 'Nome', sortable: true},
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
</style>