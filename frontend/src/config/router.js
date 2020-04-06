import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/template/Home'
import Register from '../components/home_pages/Register'
import AdminAuth from '../components/home_pages/AdminAuth'
import Contact from '../components/home_pages/Contact'
import About from '../components/home_pages/About'

import Admins from '../components/admin_pages/Admins'
import Providers from '../components/admin_pages/Providers'
import AdminConfigs from '../components/admin_pages/AdminConfigs'

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
        meta: {requiresAdmin: true}
    }, {
        name: 'gerenciaAdmins',
        path: '/administradores',
        component: Admins,
        meta: {requiresAdmin: true}
    }, {
        name: 'gerenciaFornecedores',
        path: '/fornecedores',
        component: Providers,
        meta: {requiresAdmin: true}
    }
    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) =>{
    const json = localStorage.getItem(adminKey)
    if(to.matched.some(record => record.meta.requiresAdmin)){
        const admin = JSON.parse(json)
        admin && admin.admin ? next() : next({ path: '/'})
    } else{
        next()
    }
})

export default router