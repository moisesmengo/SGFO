import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/users_templates/Home'
import About from '../components/users_templates/about/About'
import Contact from '../components/users_templates/contact/Contact'
import LoginAdmin from '../components/users_templates/admin_login/LoginAdmin'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/contato', component: Contact },
        { path: '/sobre', component: About },
        { path: '/administracao', component: LoginAdmin },
    ]
})