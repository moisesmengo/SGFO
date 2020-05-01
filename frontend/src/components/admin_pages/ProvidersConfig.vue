<template>
    <div class="providers-configs">
        <Titles
            icon="build"
            main="Gerenciar Fornecedores"      
       />
       <div class="providers-config-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Fornecedores" active>
                        <Providers/>
                    </b-tab>
                    <b-tab title="Cadastrar fornecedor">
                        <NewProvider/>
                    </b-tab>
                    <b-tab title="Bloqueios">
                        
                    </b-tab>
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../template/Titles'
import Providers from '../admin_pages/Providers'
import NewProvider from '../admin_pages/NewProvider'

export default {
    name: 'ProvidersConfig',
    components: { Titles, Providers, NewProvider  }
}
</script>
<style lang="css">
    .providers-config-tabs .nav-link{
        color: #000;
    }
</style>