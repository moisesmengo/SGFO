<template>
    <div class="admins">
        <Titles
            main="Administradores do Sistema"
            icon="assignment_ind"
        />
        <h4>Cadastrar Administrador</h4>
        <hr>
        <b-form>
            <input id="admin-id" type="hidden" v-model="admin.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="admin-name">
                        <b-form-input
                            id="admin-name" type="text" v-model="admin.nome"
                            placeholder="Informe o nome do administrador"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="admin-email">
                        <b-form-input
                            id="admin-email" type="text" v-model="admin.email"
                            placeholder="Informe o e-mail do administrador"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
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
        </b-form>
        <hr>
        <div class="content-table-admins">
            <div class="filter-and-title">  
                <b-form-input :v-model="search" placeholder="Buscar..."></b-form-input>
            </div>
            <div class="table">
                <b-table 
                    hover striped 
                    :items="this.admins" 
                    :fields="fields">
                </b-table>
            </div>
            <div class="content-pages">
                <span> < </span> <span> ></span>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl } from '../../../global'
import Titles from '../Titles'
export default {
    name: 'Admins',
    components:{ Titles },
    data() {
        return {
            search: '',
            mode: 'save',
            admin: {},
            admins: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true},
                { key: 'nome', label: 'Nome', sortable: true},
                { key: 'email', label: 'E-mail', sortable: true},
                { key: 'acoes', label: 'Ações'},
            ]
        }
    }, 
    methods:{
        loadAdmins(){
            const url = `${baseApiUrl}/admins`
            axios.get(url).then(res =>{          
                this.admins = res.data
                // eslint-disable-next-line
                console.log(this.admins)
            })
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
        justify-content: flex-end;
        margin: 10px 0 20px ;
    }
    .content-pages{
        display: flex;
        justify-content: flex-end;
    }
    .filter-and-title input{
        width: 40%;
    }
</style>