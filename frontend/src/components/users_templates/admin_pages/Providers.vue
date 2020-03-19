<template>
    <div>
        <Titles
            main="Fornecedores Cadastrados"
            icon="folder_shared"
        />
        <div class="format-data" v-show="mode === 'edit'">
            <b-row>
                <b-col md="4" sm="12">
                    <div class="image-and-name">
                        <img src="" width="100px" height="150px" >
                        <span>Fornecedor</span>
                    </div>
                </b-col>
                <b-col md="8" sm="12">
                    <div class="data-form">
                        <b-form>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="E-mail:" label-for="provider-email">
                                        <b-form-input
                                            id="provider-email" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="9" sm="12">
                                    <b-form-group label="Cidade:" label-for="provider-city">
                                        <b-form-input
                                            id="provider-city" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                                <b-col md="3" sm="12">
                                    <b-form-group label="Estado:" label-for="admin-email">
                                        <b-form-input
                                            id="admin-email" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Endereço:" label-for="provider-address">
                                        <b-form-input
                                            id="provider-address" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="12" sm="12">
                                    <b-form-group label="Telefone:" label-for="provider-phone">
                                        <b-form-input
                                            id="provider-phone" type="text"
                                            placeholder="Informe o e-mail do administrador"
                                            :readonly="mode === 'edit'"
                                        />       
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                </b-col>
            </b-row> 
        </div>
        <hr>
    </div>
</template>
<script>
import Titles from '../Titles'
export default {
    name: 'Providers',
    components:{ Titles },
    data() {
        return {
            mode: 'edit'
        }
    },
}
</script>
<style lang="css">
    .image-and-name{
        background-color: rgba(107, 106, 106, 0.103);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 8px;
    } 
    .image-and-name span{
        margin-top: 10px;
    }
</style>