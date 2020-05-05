<template>
    <div class="item">
        <div class="item-image d-none d-sm-block">
            <img v-if="item.imagemUrl" :src="item.imagemUrl" height="150" width="150">
            <img v-else :src="imgItem" height="150" width="150">
        </div>
        <div class="item-name">
            <h3>{{item.nome}}</h3>
            <p> {{item.descricao}} </p>
            <span><strong>Quantidade em estoque: </strong> {{item.qtdEstoque}} </span>
            <div class="actions-items mt-3">
                <router-link :to="{name: 'itemId', params: {id: item.id}}" >
                    <button class="btn btn-secondary mr-2" @click="modeEdit()"><i class="fa fa-pencil"></i></button>
                </router-link>
                <router-link :to="{name: 'itemId', params: {id: item.id}}">
                    <button class="btn btn-danger"  @click="modeRemove()"><i class="fa fa-trash"></i></button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import img from '../../../asets/item.png'
import {mapMutations}  from 'vuex'
export default {
    name:'Item',
    data() {
        return {
            imgItem: img,
        }
    },
    props:['item'],
    methods:{
        ...mapMutations(['setMode']),
        modeEdit(){
            this.setMode('edit')
        },
        modeRemove(){
            this.setMode('remove')
        }
    }
}
</script>
<style lang="css">
    .item{
        border-radius: 3px;
        margin-bottom: 20px;
        background-color: #DFE2E5 ;
        padding: 20px;
        border: solid 1px #867c7c;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        display: flex;
        align-items: flex-start;
    }
    .item .item-name h3{
        font-size: 1.7rem;
    }
    .item .item-image{
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #AAA;
    }
    .item .item-image img{
        border-radius: 3px;
    }
    .item .item-name {
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }
    .item .item-name p{
        flex: 1;
        color: #555;
        font-size: 1rem;
    }
</style>