<template>
    <div>
        <Titles
            main="Fornecedores Cadastrados"
            icon="folder_shared"
        />

        <div class="format-data" v-show="mode === 'edit'">
            <b-row>
                <b-col md="4" sm="12">
                    <div class="image-and-name">
                        <img src="" width="100px" height="150px" >
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
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="9" sm="12">
                                    <b-form-group label="Cidade:" label-for="provider-city">
                                        <b-form-input
                                            id="provider-city" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                                <b-col md="3" sm="12">
                                    <b-form-group label="Estado:" label-for="admin-email">
                                        <b-form-input
                                            id="admin-email" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Endereço:" label-for="provider-address">
                                        <b-form-input
                                            id="provider-address" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Telefone:" label-for="provider-phone">
                                        <b-form-input
                                            id="provider-phone" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
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
                    :items="this.fornecedores" 
                    :fields="fields">
                    <template slot="acoes" slot-scope="data">
                        <b-button variant="danger" @click="loadProvider(data.item, 'remove')">
                            <i class="fa fa-trash"></i>
                        </b-button>
                        <b-button variant="success" @click="blockProvider(data.item, 'remove')">
                            <i class="fa fa-eye"></i>
                        </b-button>
                    </template>
                </b-table>
            </div>
            <div class="content-pages-provider">
                <span> voltar </span> <span> avançar</span>
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
            mode: 'none',
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
            const url = `${baseApiUrl}/fornecedores`
            axios.get(url).then(res => {
                this.fornecedores = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        reset(){
            this.mode = 'none'
            this.loadProviders()
        },
        blockProvider(){
            const id = this.fornecedor.id
            axios.delete(`${baseApiUrl}/fornecedores/${id}`)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadProvider(fornecedor, mode = 'view'){
            this.mode = mode
            axios.get(`${baseApiUrl}/fornecedores/${fornecedor.id}`)
                .then(res=> this.fornecedor = res.data)
        },
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
        justify-content: flex-end;
    }
    .filter-and-title-provider input{
        width: 40%;
    }
</style>