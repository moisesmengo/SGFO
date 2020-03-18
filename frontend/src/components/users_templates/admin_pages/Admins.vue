<template>
    <div class="admins">
        <Titles
            main="Administradores do Sistema"
            icon="assignment_ind"
        />
    </div>
</template>
<script>
import axios from 'axios'
import { baseApiUrl } from '../../../global'
import Titles from '../Titles'
export default {
    name: 'Admins',
    components:{ Titles },
    data() {
        return {
            mode: 'save',
            admin: {},
            admins: [],
        }
    }, 
    methods:{
        loadAdmins(){
            const url = `${baseApiUrl}/admins`
            axios.get(url).then(res =>{          
                this.admins = res.data
                // eslint-disable-next-line
                console.log(this.admins)
            })
        }
    },
    mounted(){
        this.loadAdmins()
    }
}
</script>
<style lang="css">
    
</style>