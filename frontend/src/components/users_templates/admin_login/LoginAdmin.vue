<template>
    <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 >
    <v-card class="elevation-5">
        <v-toolbar class="blue darken-3" dark flat >

            <v-toolbar-title>Login Administração</v-toolbar-title>
            <v-spacer></v-spacer>
 
        </v-toolbar>
        <v-card-text>
        <v-form>
            <v-text-field
            label="Email"
            name="login"
            v-model="admin.email"
            prepend-icon="person"
            type="text"
            ></v-text-field>

            <v-text-field
            id="senha"
            label="Senha"
            name="senha"
            v-model="admin.senha"
            prepend-icon="lock"
            type="password"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" @click="signin">Login</v-btn>
        </v-card-actions>
    </v-card>
    </v-flex>
    </v-layout>
</template>
<script>
import axios from 'axios'
import { baseApiUrl, showError, adminKey } from '../../../global'

export default {
    data() {
        return {
            drawer: null,
            admin: {},
        }
    },
    methods:{
        reset(){
            this.admin = {}
        },
        signin() {
            axios.post(`${baseApiUrl}/signinAdmin`, this.admin)
                .then(res => {
                    this.$store.commit('setAdmin', res.data)
                    localStorage.setItem(adminKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                }).catch(showError)
                
        },
    }
}
</script>
<style lang="css">
    
</style>