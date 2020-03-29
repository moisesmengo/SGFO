<template>
    <div class="admin-data">
        <b-row>
            
            <b-col md="8" sm="12">
                <div class="data-form">
                    <b-form>
                        <input id="admin-id" type="hidden" v-model="admin.id" />
                        <b-row v-if="mode === 'profile'">
                            <b-col md="12" sm="12">
                                <b-form-group label="E-mail:" label-for="admin-email">
                                    <b-form-input
                                        id="admin-email" type="text" 
                                        v-model="admin.email"                                                       
                                    />       
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-if="mode === 'profile'">
                            <b-col md="12" sm="12">
                                <b-form-group label="Nome:" label-for="admin-name">
                                    <b-form-input
                                        id="admin-name" type="text" 
                                        v-model="admin.nome"                            
                                    />       
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-if="mode === 'profile'">
                            <b-col md="12" sm="12">
                                <b-form-group label="Telefone:" label-for="admin-phone">
                                    <b-form-input
                                        id="admin-phone" type="text"                                            
                                        v-model="admin.telefone"                  
                                    />       
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-if="mode == 'password'">
                            <b-col md="6" sm="12">
                                <b-form-group label="Senha:" label-for="admin-password">
                                    <b-form-input
                                        id="admin-password" type="password"                                            
                                        v-model="admin.senha"
                                    />       
                                </b-form-group>
                            </b-col>
                            <b-col md="6" sm="12">
                                <b-form-group label="Confirmar Senha:" label-for="admin-confirm-password">
                                    <b-form-input
                                        id="admin-confirm-password" type="password"                                            
                                        v-model="admin.confirmarSenha" 
                                    />       
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row v-if="mode == 'photo'">
                            <b-col md="12" sm="12">
                                <b-form-group label="Default:" label-for="file-default" label-cols-sm="2">
                                    <b-form-file id="file-default"></b-form-file>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col xs="12" class="mb-3">
                                <b-button 
                                    variant="primary" 
                                    @click="save"
                                >Salvar</b-button>
                                <b-button 
                                    class="ml-2"                             
                                >Cancelar</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </b-col>

            <b-col md="4" sm="12">
                <div class="perfil-content">
                    <div class="content-data">
                        <img :src="admin.imagemUrl || 'https://www.opopular.com.br/polopoly_fs/1.1841507.1562980097!/image/image.jpg_gen/derivatives/landscape_800/image.jpg' " >
                        <h3><strong>{{admin.nome}}</strong></h3>
                        <span> {{admin.email}} </span>
                    </div>
                    <div class="edit-controls">
                        <button @click="mode = 'profile'">Editar Perfil</button>
                        <button @click="mode = 'password'">Editar Senha</button>
                        <button @click="mode = 'photo'">Editar Foto</button>
                    </div>
                </div> 
            </b-col>

        </b-row> 
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import { baseApiUrl, showError} from '../../../global'
export default {
    name: 'AdminData',
    computed:{
        ...mapState({
            admin: 'admin',
        }),
    },
    data() {
        return {
            mode: "profile",
        }
    },
    methods:{
        save(){
            const id = this.admin.id
            axios.put(`${baseApiUrl}/admins/${id}`, this.admin)
                .then(() =>{
                    this.$toasted.global.defaltSuccess()
                }).catch(showError)

            this.updateAdmin(this.admin)
        }
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