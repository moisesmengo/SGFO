<template>
    <div class="admin-configs">
        <Titles
            icon="build"
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
                </b-tabs>
            </b-card>
       </div>
    </div>
</template>
<script>
import Titles from '../template/Titles'
import AdminData from '../admin_pages/AdminData'
import Admins from '../admin_pages/Admins'
export default {
    name: 'AdminConfigs',
    components: { Titles, AdminData, Admins }
}
</script>
<style lang="css">
    .admin-config-tabs .nav-link{
        color: #000;
    }
</style>