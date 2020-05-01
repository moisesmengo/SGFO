import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/template/Home'
import Register from '../components/home_pages/Register'
import AdminAuth from '../components/home_pages/AdminAuth'
import Contact from '../components/home_pages/Contact'
import About from '../components/home_pages/About'

import Admins from '../components/admin_pages/Admins'
import AdminConfigs from '../components/admin_pages/AdminConfigs'
import ProvidersConfig from '../components/admin_pages/ProvidersConfig'

import Solicitations from '../components/provider_pages/Solicitations'

import {adminKey} from '../global'

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
        name: 'solicitacoes',
        path: '/minhas-solicitacoes',
        component: Solicitations
    }, {
        name: 'configuracoesFornecedores',
        path: '/gerencia-fornecedores',
        component: ProvidersConfig
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