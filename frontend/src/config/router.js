import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/template/Home'
import Register from '../components/home_pages/Register'
import AdminAuth from '../components/home_pages/AdminAuth'
import Contact from '../components/home_pages/Contact'
import About from '../components/home_pages/About'

import Admins from '../components/admin_pages/admin/Admins'
import AdminConfigs from '../components/admin_pages/admin/AdminConfigs'
import ProvidersConfig from '../components/admin_pages/provider/ProvidersConfig'
import ItemsConfig from '../components/admin_pages/item/ItemsConfig'
import ItemById from '../components/admin_pages/item/ItemById'
import Requests from '../components/admin_pages/solicitacao/Requests'
import EntryItems from '../components/admin_pages/item/EntryItems'

import ProviderConfig from '../components/provider_pages/ProviderConfig'

Vue.use(VueRouter)

const routes = [{
        name: 'home', 
        path: '/', 
        component: Home,
        
    }, {
        name:'registro',
        path:'/registro',
        component: Register
    }, {
        name: 'login-adimin',
        path:'/administracao',
        component: AdminAuth
    }, {
        name: 'contato',
        path: '/contato',
        component: Contact
    }, {
        name: 'sobre',
        path: '/sobre',
        component: About
    }, {
        name:'configuracoes',
        path:'/configuracoes',
        component: AdminConfigs,
        //meta: {requiresAdmin: true}
    }, {
        name: 'gerenciaAdmins',
        path: '/administradores',
        component: Admins,
        //meta: {requiresAdmin: true}
    }, {
        name: 'configuracoesFornecedores',
        path: '/gerencia-fornecedores',
        component: ProvidersConfig
    } , {
        name: 'configuracoesItens',
        path: '/gerencia-itens',
        component: ItemsConfig
    } , {
        name: 'itemId',
        path: '/itens/:id',
        component: ItemById
    }, {
        name: 'solicitacoes',
        path: '/solicitacoes',
        component: Requests
    }, {
        name: 'fornecedor-configuracoes',
        path: '/minhas-configuracoes',
        component: ProviderConfig
    }, {
        name: 'entrada-de-itens',
        path: '/entradas',
        component: EntryItems
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

/*router.beforeEach((to, from, next) =>{
    const json = localStorage.getItem(adminKey)
    if(to.matched.some(record => record.meta.requiresAdmin)){
        const admin = JSON.parse(json)
        admin && admin.admin ? next() : next({ path: '/'})
    } else{
        next()
    }
})*/

export default router