<template>
    <div class="admin-auth-content">
        <div>
            <b-row>
               <b-col md="8" sm="12">
                   <div class="text-information">
                        <p>
                            Apenas usuários administradores do sistema conseguirão
                            fazer login por essa página!
                        </p>
                   </div>
               </b-col>
               <b-col md="4" sm="0"></b-col>
           </b-row>
           <b-row>
               <b-col md="8" sm="12">
                   <div class="content-form">
                        <h1 class="title-info">É um administrador? Faça login</h1>
                        <hr>
                        <form>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="email" placeholder="Digite seu e-mail">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha:</label>
                                <input type="password" placeholder="Digite sua senha">
                            </div>
                        </form>
                        <a class="remember-password" href="">Esqueceu sua senha?</a>
                        <button class="button" type="submit">ENTRAR</button>
                   </div>
               </b-col>
               <b-col md="4" sm="0" >
                   <img :src="adminImg" class="img" alt="administrador">
               </b-col>
           </b-row>
        </div>
    </div>
</template>
<script>
import admin from '../../asets/admin.png'
export default {
    name: 'AdminAuth',
    data() {
        return {
            adminImg: admin,
        }
    },
}
</script>
<style lang="css">
    
</style>