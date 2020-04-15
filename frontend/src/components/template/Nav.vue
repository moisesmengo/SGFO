<template>
  <nav class="nav">
    <div class="basic-links">
        <router-link to="/">Início</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/sobre">Sobre</router-link>
    </div>
    <div class="admin-link">
        <router-link to="/administracao">Administração</router-link>
    </div>
  </nav>
</template>

<script>

export default {
    name: "Footer"
}
</script>
<style lang="css">
    nav.nav {
        grid-area: nav;
        background: linear-gradient(to right, #9FC3E6, rgb(189, 214, 240));
        color: #0D0D0D;
        height: 40px;
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav.nav .admin-link{
        height: 100%;
        display: flex;
        justify-self: flex-end;
        align-items: center;
    }
    nav.nav .admin-link a{
        font-size: 1.3rem;
        color: #2A3756;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px ;
    }
    nav.nav > .basic-links{
        height: 100%;
        display: flex;
        justify-self: flex-start;
        align-items: center;   
    }
    nav.nav > .basic-links a{
        font-size: 1.3rem;
        color: #2A3756;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px ;
    }
    nav.nav > .basic-links a:hover,
    nav.nav >.admin-link a:hover
    {
        background-color: rgba(0, 0, 0, 0.2);
        color: #0D0D0D;
    }

    @media only screen and (max-device-width: 700px) {
        
    }
</style>