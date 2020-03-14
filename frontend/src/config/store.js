import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: true,
        fornecedor: null,
        admin: null,
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setProvider(state, fornecedor) {
            state.fornecedor = fornecedor
            if(fornecedor) {
                axios.defaults.headers.common['Authorization'] = `bearer ${fornecedor.token}`
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        },
        setAdmin(state, admin){
            state.admin = admin
            if(admin){
                axios.defaults.headers.common['Authorization'] = `bearer ${admin.token}`
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        }
    }
})