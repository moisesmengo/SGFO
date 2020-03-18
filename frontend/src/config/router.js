import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/users_templates/Home'
import About from '../components/users_templates/about/About'
import Contact from '../components/users_templates/contact/Contact'
import LoginAdmin from '../components/users_templates/admin_login/LoginAdmin'
import AdminData from '../components/users_templates/admin_pages/AdminData'
import Settings from '../components/users_templates/admin_pages/Settings'
import Admins from '../components/users_templates/admin_pages/Admins'

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
        component: AdminData
    }, {
        name:'configuracoes',
        path:'/configuracoes',
        component: Settings
    }, {
        name: 'gerenciaAdmins',
        path: '/administradores',
        component: Admins
    }
    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router