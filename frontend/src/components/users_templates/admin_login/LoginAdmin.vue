<template>
    <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 >
    <v-card class="elevation-5">
        <v-toolbar class="blue-grey darken-2" dark flat >

            <v-toolbar-title>Login Administração</v-toolbar-title>
            <v-spacer></v-spacer>
 
        </v-toolbar>
        <v-card-text>
        <v-form>
            <v-text-field
            label="Login"
            name="login"
            prepend-icon="person"
            type="text"
            ></v-text-field>

            <v-text-field
            id="senha"
            label="Senha"
            name="senha"
            prepend-icon="lock"
            type="password"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            drawer: null,
        }
    },
}
</script>
<style lang="css">
    
</style>