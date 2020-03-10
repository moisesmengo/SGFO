<template>
    <v-layout class="pink home-content" row wrap>     
        <div class="auth-modal">
            <h1>Logo</h1>
            <hr>

            <div class="auth-title">
                {{ showSignup ? 'Cadastre-se como fornecedor' : 'Faça login'}}
            </div>

            <input v-if="showSignup" type="text" name="nome" placeholder="Nome">
            <input type="email" name="email" placeholder="E-mail">
            <input v-if="showSignup" name="cidade" type="text" placeholder="Cidade">
            <input v-if="showSignup" type="text" name="estado" placeholder="Estado">
            <input v-if="showSignup" type="text" name="endereco" placeholder="Endereço">
            <input type="password" name="senha" placeholder="Senha">
            <input v-if="showSignup" name="confirmarSenha" type="password" placeholder="Confirme a Senha">

            <button v-if="showSignup" >Cadastrar</button>
            <button v-else >Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já é fornecedor? Acesse o Login!</span>
                <span v-else>Ainda não é fornecedor? Registre-se aqui!</span>
            </a>

        </div>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            showSignup: true,
            provider:{},
        }
    },
}
</script>
<style lang="css">
    .home-content{
        height: 600px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .auth-modal{
        background-color:#fff ;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        margin-right: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title{
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 1px;
        margin-bottom: 15px;
    }

    .auth-modal input{
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .auth-modal button{
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 25px;
    }

    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, 
            rgba(120, 120, 120, 0), 
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0)
            );
    }

</style>