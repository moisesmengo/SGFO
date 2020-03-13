import Vue from 'vue'
export const baseApiUrl = 'http://localhost:3000'
export const providerKey = '__fornecedor_'
export const adminKey = '__admin_'

export function showError(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if(typeof e==='string'){
        Vue.toasted.global.defaultError({msg:e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, providerKey }
