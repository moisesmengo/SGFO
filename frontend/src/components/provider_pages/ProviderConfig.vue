<template>
    <div class="providers-configs">
        <Titles
            icon="settings"
            main="Configurações"      
       />
       <div class="config-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Meus dados" active>
                        <ProviderData/>
                    </b-tab>
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../template/Titles'
import ProviderData from './ProviderData'

export default {
    name: 'ProviderConfig',
    components: { Titles, ProviderData }
}
</script>
<style lang="css">
    .config-tabs .nav-link{
        color: #000;
    }
</style>