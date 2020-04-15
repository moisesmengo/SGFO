import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: false,
        fornecedor:null,
        admin: null,
        user: null
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(!state.user){
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
                state.user = true
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
                state.user = false
            }
        },
        setAdmin(state, admin){
            state.admin = admin
            if(admin){
                axios.defaults.headers.common['Authorization'] = `bearer ${admin.token}`
                state.isMenuVisible = true
                state.user = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
                state.user = false
            }
        }
    }
})
