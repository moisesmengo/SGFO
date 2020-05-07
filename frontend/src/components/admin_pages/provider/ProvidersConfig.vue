<template>
    <div class="providers-configs">
        <Titles
            icon="group"
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
                        <Blocks/>
                    </b-tab>
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../../template/Titles'
import Providers from './Providers'
import NewProvider from './NewProvider'
import Blocks from './Blocks'

export default {
    name: 'ProvidersConfig',
    components: { Titles, Providers, NewProvider, Blocks }
}
</script>
<style lang="css">
    .providers-config-tabs .nav-link{
        color: #000;
    }
</style>