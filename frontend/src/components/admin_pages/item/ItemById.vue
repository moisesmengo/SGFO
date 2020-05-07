<template>
    <div class="item-by-id">
        <Titles
            icon="category"
            main="Item"      
       />

       <b-form>
           <b-row>
                <b-col md="8" sm="12">
                    <b-row>
                        <b-col md="7" sm="12">
                            <b-form-group label="Nome:" label-for="nome">
                                <b-form-input
                                    id="nome" type="text" 
                                    placeholder="Informe o nome do item"
                                    v-model="item.nome"
                                    :readonly="mode === 'remove'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="3" sm="12">
                            <b-form-group label="Quantidade:" label-for="qtdEstoque">
                                <b-form-input
                                    id="qtdEstoque" type="number" 
                                    v-model="item.qtdEstoque"
                                    :readonly="mode === 'remove'" 
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="2" sm="12">
                            <b-form-group label="Código:" label-for="id">
                                <b-form-input
                                    id="id" type="number" 
                                    v-model="item.id"
                                    readonly
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="12" sm="12">
                            <b-form-group label="Descrição:" label-for="descricao">
                                <textarea id="descricao"                                     
                                    class="item-desc form-control" 
                                    :readonly="mode === 'remove'" 
                                    v-model="item.descricao">
                                </textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row v-if="mode">
                        <b-col xs="12">
                            <b-button 
                                class="mr-2 mb-2" 
                                @click="$router.push({ path: '/gerencia-itens' })"
                            >Cancelar</b-button>
                            <b-button 
                                variant="primary" 
                                class="mb-2" 
                                @click.prevent="save"
                                v-show="mode === 'edit'"
                            >Salvar</b-button>
                            <b-button 
                                class="mb-2" 
                                variant="danger"
                                @click.prevent="remove"
                                v-show="mode === 'remove'"
                            >Excluir</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="4" sm="12">   
                    <b-row>
                        <b-col md="12" sm="12">
                            <div class="image-item-content mt-3" >
                                <img v-if="item.imagemUrl" :src="item.imagemUrl" class="image-item" width="150px" height="150px">
                                <img v-else src="https://pngimage.net/wp-content/uploads/2018/06/produto-png.png" class="image-item">
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="12" sm="12" class="mt-4">
                            <b-form-group label="Imagem URL:" label-for="imagemUrl">
                                <b-form-input
                                    id="imagemUrl" type="text" 
                                    v-model="item.imagemUrl"
                                    :readonly="mode === 'remove'" 
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
       </b-form>
       <hr>
       <b-row>      
            <div class="controller-quantity-item" v-show="mode === 'edit'">
                <span>Alterar quntidade em estoque</span>
                <p>(O valor inserido será somado/subtraído ao valor total da quantidade)</p>
                    <input type="number" v-model="value">
                    <div class="plus-or-less">
                        <b-button variant="success" @click="addQuantity()">
                            <i class="fa fa-plus"></i>
                        </b-button>
                        <b-button variant="danger">
                            <i class="fa fa-minus"></i>
                        </b-button>
                    </div>
            </div>
       </b-row>
    </div>
</template>
<script>
import axios from 'axios'
import {baseApiUrl, showError} from '../../../global'
import Titles from  '../../template/Titles'

export default {
    name: 'ItemById',
    components: {Titles},
    data: function() {
        return {
            item:{},   
            value: 0,
            newQuantity: 2,
        }
    },
    computed:{
        mode(){
            return this.$store.state.items.mode
        }
    },
    methods:{
        save(){
            const id = this.item.id
            axios.put(`${baseApiUrl}/itens/${id}`, this.item)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.$router.push({ path: '/gerencia-itens' })
                }).catch(showError)   
        },
        remove(){
            const id = this.item.id
            axios.delete(`${baseApiUrl}/itens/${id}`, this.item)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.$router.push({ path: '/gerencia-itens' })
                }).catch(showError)   
        },
        addQuantity(){
            const newQuantity = parseInt(this.item.qtdEstoque) + parseInt(this.value)

        }
    },
    mounted() {
        const url = `${baseApiUrl}/itens/${this.$route.params.id}`
        axios.get(url).then(res => this.item = res.data)
    },
}
</script>
<style lang="css">
    .image-item-content{
        width: auto;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .controller-quantity-item{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

    }
    .controller-quantity-item input{
        border-radius: 3px;
        height: 40px;
    }
    .controller-quantity-item span{
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .controller-quantity-item p{
        font-size: 0.9rem;
        color: rgba(42, 43, 43, 0.74);
    }
    .plus-or-less button {
        padding: 15px;
        border-radius: 3px;
        margin: 10px 5px;
        transition: filter 0.2s;
    }
    .plus-or-less button:hover{
        filter: brightness(70%)
    }
    .item-by-id .image-item{
        max-width: 100%;
        max-height: 100%;
    }
</style>