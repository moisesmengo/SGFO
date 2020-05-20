<template>
    <div class="admin-configs">
        <Titles
            icon="settings"
            main="Configurações"      
       />
       <div class="admin-config-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Meus Dados" active>
                        <AdminData/>
                    </b-tab>
                    <b-tab title="Administradores">
                        <Admins/>
                    </b-tab>
                    <b-tab title="Exclusões">
                        <AdminsRemoveds/>
                    </b-tab>
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../../template/Titles'
import AdminData from './AdminData'
import Admins from './Admins'
import AdminsRemoveds from './AdminsRemoveds'
export default {
    name: 'AdminConfigs',
    components: { Titles, AdminData, Admins, AdminsRemoveds }
}
</script>
<style lang="css">
    .admin-config-tabs .nav-link{
        color: #000;
    }
</style>