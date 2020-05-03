<template>
    <div class="items-configs">
        <Titles
            icon="category"
            main="Gerenciar Itens"      
       />
       <div class="items-config-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Itens" active>
                        <Itens/>
                    </b-tab>
                    <b-tab title="Novo Item">
                       <NewItem/>
                    </b-tab>
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../template/Titles'
import Itens from  '../admin_pages/Items'
import NewItem from '../admin_pages/NewItem'

export default {
    name: 'AdminConfigs',
    components: { Titles, Itens, NewItem }
}
</script>
<style lang="css">
    .items-config-tabs .nav-link{
        color: #000;
    }
</style>