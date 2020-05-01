<template>
    <div class="admins">
        <h3>Cadastrar Administrador</h3>
        <hr>
        <b-form>
            <input id="admin-id" type="hidden" v-model="admin.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="admin-name">
                        <b-form-input
                            id="admin-name" type="text" v-model="admin.nome"
                            placeholder="Informe o nome do administrador"
                            :readonly="mode === 'remove'"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="admin-email">
                        <b-form-input
                            id="admin-email" type="text" v-model="admin.email"
                            placeholder="Informe o e-mail do administrador"
                            :readonly="mode === 'remove'"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row v-show="mode === 'save'">
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="admin-password">
                        <b-form-input
                            id="admin-password" type="password" v-model="admin.senha"
                            placeholder="cadastre uma senha temporária para o administrador"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar Senha:" label-for="admin-comfirm-password">
                        <b-form-input
                            id="admin-comfirm-password" type="password" v-model="admin.confirmarSenha"
                            placeholder="Confirme a senha"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button 
                    variant="primary" 
                    v-if="mode === 'save'"
                    @click="save"
                    >Salvar</b-button>
                    <b-button 
                        variant="danger" 
                        v-if="mode === 'remove'"
                        @click="remove"
                    >Excluir</b-button>
                    <b-button 
                        class="ml-2" 
                        @click="reset"
                    >Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>

        <hr>

        <div class="content-table-admins">
            <div class="filter-and-title"> 
                <h3>Administradores Cadastrados</h3>
                <div class="adm-filter">
                    <i class="fa fa-search"></i>
                    <input type="text" 
                        placeholder="Buscar" 
                        class="filter-field"
                    >
                </div>
            </div>
            <div class="table">
                <b-table 
                    hover striped 
                    :items="this.admins" 
                    :fields="fields">
                    <template slot="acoes" slot-scope="data">
                        <b-button class="icon-remove" variant="danger" @click="loadAdmin(data.item, 'remove')">
                            <i class="fa fa-trash"></i>
                        </b-button>
                    </template>
                </b-table>
            </div>
            <div class="content-pages">
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
import axios from 'axios'
import { baseApiUrl, showError } from '../../global'

export default {
    name: 'Admins',
    data() {
        return {
            mode: 'save',
            admin: {},
            admins: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true},
                { key: 'nome', label: 'Nome', sortable: true},
                { key: 'email', label: 'E-mail', sortable: true},
                { key: 'acoes', label: 'Ações'},
            ],
            page: 1,
            limit: 0,
            count: 0,
        }
    }, 
    methods:{
        loadAdmins(){
            const url = `${baseApiUrl}/admins?page=${this.page}`
            axios.get(url).then(res =>{          
                this.admins = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        }, 
        reset(){
            this.mode = 'save'
            this.admin = {}
            this.loadAdmins()
        },
        save(){
            const method = this.admin.id ? 'put': 'post'
            const id = this.admin.id ? `/${this.admin.id}` : ''
            axios[method](`${baseApiUrl}/admins${id}`, this.admin)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)       
        },
        remove(){
            const id = this.admin.id
            axios.delete(`${baseApiUrl}/admins/${id}`)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadAdmin(admin, mode = 'save'){
            this.mode = mode
            axios.get(`${baseApiUrl}/admins/${admin.id}`)
                .then(res=> this.admin = res.data)
        }
    },
    watch:{
        page(){
            this.loadAdmins()
        }
    },
    mounted(){
        this.loadAdmins()
    }, 
}
</script>
<style lang="css">
    .content-table-admins {
        display: flex;
        flex-direction: column;
        
    }
    .filter-and-title{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 20px ;
    }
    .content-pages{
        display: flex;
        justify-content: center;
    }
    .filter-and-title input{
        width: 40%;
    }
    .adm-filter{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #aaa;
    }
   .adm-filter i{
       color: #aaa;
       margin-right: 10px;
   }

   .adm-filter input{
       color: #ccc;
       font-size: 1.3rem;
       border:0;
       outline: 0;
       width: 100%;
   }
</style>