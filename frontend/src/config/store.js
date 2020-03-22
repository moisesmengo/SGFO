import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: false,
        fornecedor:null,
        admin: null,
        
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(!state.admin){
                state.isMenuVisible = false
                return
            }
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
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})