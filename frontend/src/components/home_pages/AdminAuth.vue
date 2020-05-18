<template>
    <div class="admin-auth-content">
        <b-row>
            <b-col md="12" sm="12">
                <div class="text-information">
                        <div>
                        <b-alert show dismissible variant="warning">
                            Apenas os administradores do sistema devem faze login
                            por essa área d sistema!
                        </b-alert>
                    </div>
                </div>
            </b-col>
        </b-row>
        <div class="content-center-admin-auth">
            <div class="main-content">  
                <b-row class="w-100">  
                        <b-col md="12" sm="12">
                            <div class="content-form center-dog-of-mulesta">
                                    <h1 class="title-info">É um administrador? Faça login</h1>
                                    <hr>
                                    <form>
                                        <div class="form-group">
                                            <label for="email">E-mail:</label>
                                            <input type="email" placeholder="Digite seu e-mail" v-model="admin.email">
                                        </div>
                                        <div class="form-group">
                                            <label for="senha">Senha:</label>
                                            <input type="password" placeholder="Digite sua senha" v-model="admin.senha">
                                        </div>
                                    </form>
                                    <a class="remember-password" href="">Esqueceu sua senha?</a>
                                    <button class="button" type="submit" @click.prevent="signin">ENTRAR</button>
                            </div>
                        </b-col>
                </b-row>
            </div> 
        </div>
        
    </div>
</template>
<script>
import admin from '../../asets/admin.png'
import axios from 'axios'
import { baseApiUrl, showError, adminKey} from '../../global'
export default {
    name: 'AdminAuth',
    data() {
        return {
            adminImg: admin,
            admin:{}
        }
    },
    methods: {
        signin(){
            axios.post(`${baseApiUrl}/signinAdmin`, this.admin)
                .then( res => {
                    this.$store.commit('setAdmin', res.data)
                    localStorage.setItem(adminKey, JSON.stringify(res.data))
                    this.$router.push({path: '/'})
                }).catch(showError)
        }
    },
}
</script>
<style lang="css">
    .center-dog-of-mulesta{
        padding-left: 30px;
    }
    .admin-auth-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content-center-admin-auth{
        width: 500px;
    }

    @media (max-width:500px){
        .content-center-admin-auth{
            width: auto;
        }
        .center-dog-of-mulesta{
            padding-left: 5px;
            padding-right: 5px;
        }
    }
</style>