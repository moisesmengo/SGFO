<template>
    <div class="register-content">
        <div class="container">
            <div class="content-form">
                <h1 class="title-info">Registre-se</h1>
                <hr>
                <b-row>
                    <b-col md="6" sm="12">
                        <div class="form-group">
                            <label for="nome">Nome:</label>
                            <input placeholder="Digite seu nome">
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" placeholder="Digite seu e-mail">
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha:</label>
                            <input type="password" placeholder="Digite sua senha">
                        </div>
                        <div class="form-group">
                            <label for="confirmarSenha">Confirmar senha:</label>
                            <input type="password" placeholder="Confirme sua senha">
                        </div>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-row>
                            <b-col md="8" sm="8">
                                <div class="form-group">
                                    <label for="cidade">Cidade:</label>
                                    <input placeholder="Digite sua cidade">
                                </div>
                            </b-col>
                            <b-col md="4" sm="4">
                                <div class="form-group">
                                    <label for="estado">Estado:</label>
                                    <input placeholder="UF">
                                </div>
                            </b-col>
                        </b-row>
                        <div class="form-group">
                            <label for="endereco">Endereõ:</label>
                            <input placeholder="Digite seu endereço">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone:</label>
                            <input placeholder="Digite seu telefone">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Foto:</label>
                            <input type="file">
                        </div>
                    </b-col> 
                </b-row>
                <div class="content-button">
                    <button type="submit" class="button">CADASTRAR</button>
                </div>
                <router-link to="/" class="register">Volte e faça login</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
}
</script>
<style lang="css">
    .register-content .content-button{
        width: 60%;
        display: flex;
        justify-content: center;
        align-self:center;
    }
    @media only screen and (max-device-width: 700px) {
        .register-content .content-button{
            width: 100%;
        }
    }
</style>