<template>
    <div class="new-item-content">
        <h3>Cadastrar Item</h3>
        <hr>
        <b-form>
            <input id="item-id" type="hidden" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome: *" label-for="nome">
                        <b-form-input
                            id="nome" type="text" 
                            placeholder="Informe o nome do item"
                            v-model="item.nome"
                        />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Quantidade em estoque:" label-for="qtdEstoque">
                        <b-form-input
                            id="qtdEstoque" type="number" 
                            placeholder="Quantidade"
                            v-model="item.qtdEstoque"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" sm="12">
                    <b-form-group label="Descrição: *" label-for="descricao">
                        <textarea id="descricao" 
                            cols="30" rows="10" 
                            class="item-desc" 
                            v-model="item.descricao">
                        </textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" sm="12">
                    <b-form-group label="Imagem URL:" label-for="imagemUrl">
                        <b-form-input
                            id="imagemUrl" type="text" 
                            placeholder="URL da imagem"
                            v-model="item.imagemUrl"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col xs="12">
                    <b-button 
                        variant="primary" 
                        @click.prevent="save"
                    >Salvar</b-button>
                    <b-button 
                        class="ml-2" 
                        @click.prevent="reset"
                    >Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
import {baseApiUrl, showError} from '../../../global'
import axios from 'axios'

export default {
    name: 'NewItem',
    data() {
        return {
            item: {},
            file: ''
        }
    },
    methods: {
      formatNames(files) {
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} files selected`
        }
      },
      reset(){
          this.item = {}
      },
      onFileChange({target}) {
            this.file = target.files[0]
      },
      save(){
            axios.post(`${baseApiUrl}/itens`, this.item)
                .then(() =>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
       
    }
  }
</script>
<style lang="css">
    .item-desc{
        border: solid 1px #ccc;
        border-radius: 3px;
    }
</style>