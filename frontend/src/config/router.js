import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/users_templates/Home'
import About from '../components/users_templates/about/About'
import Contact from '../components/users_templates/contact/Contact'
import LoginAdmin from '../components/users_templates/admin_login/LoginAdmin'
import AdminData from '../components/users_templates/admin_pages/AdminData'
import Admins from '../components/users_templates/admin_pages/Admins'
import Providers from '../components/users_templates/admin_pages/Providers'
import AdminConfigs from '../components/users_templates/admin_pages/AdminConfigs'

import {adminKey} from '../global'

Vue.use(VueRouter)

const routes = [{ 
        name: 'home', 
        path: '/', 
        component: Home 
    }, { 
        name: 'contato', 
        path: '/contato',
        component: Contact 
    }, { 
        name: 'sobre', 
        path: '/sobre', 
        component: About 
    }, { 
        name: 'login-admin',
        path: '/administracao',
        component: LoginAdmin 
    }, {
        name: 'perfil',
        path:  '/perfil-admin',
        component: AdminData,
        meta: {requiresAdmin: true}
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