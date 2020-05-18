<template>
    <div class="admin-data">
        <h3>Meus Dados</h3>
        <hr>
        <b-form>
            <input id="admin-id" type="hidden" v-model="admin.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="admin-name">
                        <b-form-input
                            id="admin-name" type="text" v-model="admin.nome"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="admin-email">
                        <b-form-input
                            id="admin-email" type="text" v-model="admin.email"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="admin-password">
                        <b-form-input
                            id="admin-password" type="password"  placeholder="sua senha" v-model="admin.senha"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar senha:" label-for="admin-confirmPassword">
                        <b-form-input
                            id="admin-confirmPassword" type="password" v-model="admin.confirmarSenha"
                            :readonly="mode === null"
                        />       
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col xs="12">
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
            </b-row>
        </b-form>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
import { baseApiUrl, showError} from '../../../global'
export default {
    name: 'AdminData',
    data() {
        return {
            mode: null,
            admin: {}
        }
    },
    computed:{
        ...mapState({adm: 'admin'})
    },
    methods:{
        reset(){
            this.mode = null
        },
        save(){
            const id = this.admin.id
            axios.put(`${baseApiUrl}/admins/${id}`, this.admin)
                .then(() =>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        mounted() {
            const url = `${baseApiUrl}/admins/${this.adm.id}`
            axios.get(url).then(res => this.admin = res.data)
        },
    },
}
</script>
<style lang="css">
    .perfil-content{
        background-color: rgba(199, 194, 194, 0.103);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        border-radius: 8px;
        box-shadow:0 0 20px rgba(0, 0, 0, 0.116) ;
        border-top: solid rgba(14, 13, 13, 0.945) 2px 
    }
    .content-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
    .perfil-content h3{
        color: rgba(10, 2, 46, 0.74);
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
    .perfil-content span{
        color: rgba(48, 48, 49, 0.973)
    }
    .perfil-content img{
        border-radius: 50%;
        max-width: 150px;
        max-height: 150px;
        padding: 15px;
    }
    .edit-controls{        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-items: center;
    }
    .edit-controls button{
        border-bottom: solid 1px rgba(206, 206, 206, 0.349);
        width: 100%;
        margin: 0 15px;
        padding: 8px;
        background-color: rgba(14, 13, 13, 0.945);
        color: #fff;
    }
     .edit-controls button:hover{
        background-color: rgba(27, 27, 26, 0.568);
        transition: filter 0.2s;
        opacity: 0.8;
        color:rgba(214, 236, 227, 0.945)
     }
</style>