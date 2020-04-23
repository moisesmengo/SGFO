<template>
    <div class="solicitations">
        <Titles
            icon="list"
            main="Minhas solicitações"
        />
        <div class="content-solicitations">
            <b-row>
                <b-col md="12" sm="12">
                    <div class="header-solicitations">
                        <h4>Lista</h4>
                        <button>
                            <i class="fa fa-plus"></i>
                            Nova
                        </button>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" sm="12">
                    <div class="table-solicitations">
                        <b-table 
                            hover striped 
                            :fields="fields">
                            <template slot="acoes">
                                <b-button variant="danger"  class="mr-2">
                                    <i class="fa fa-lock"></i>
                                </b-button>
                                <b-button variant="success">
                                    <i class="fa fa-eye"></i>
                                </b-button>
                            </template>
                        </b-table>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import Titles from '../template/Titles'
export default {
    name: 'Solicitations',
    components: {Titles},
    data() {
        return {
            fields:[
                {key: 'id', label: 'Código', sortable: true},
                {key: 'data', label: 'Data', sortable: true},
                {key: 'quantidade', label: 'Quantidade', sortable: true},
                {key: 'status', label: 'Status', sortable: false},
                {key: 'acoes', label: 'Ações'},
            ],
        }
    },
}
</script>
<style lang="css">
    .solicitations .content-solicitations{
        background-color:#DFE2E5 ;
        width: 100%;
        height: auto;
        padding: 15px;
    }
    .solicitations .content-solicitations .header-solicitations{
        display: flex;
        justify-content: space-between;
    }
    .solicitations .content-solicitations .header-solicitations button{
        background-color:  rgba(20, 70, 5, 0.87);
        padding: 0 15px;
        font-size: 0.9rem;
        color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: filter 0.2s;
        border-radius: 3px;
    }
    .solicitations .content-solicitations .header-solicitations button i{
        margin-right: 5px;
    }
    .solicitations .content-solicitations .header-solicitations button:hover{
        filter: brightness(80%)
    }
</style>