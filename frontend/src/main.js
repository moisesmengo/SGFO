import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './config/router'
import './config/msgs'
import store from './config/store'
import './config/bootstrap'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nywibm9tZSI6IlBpcmlxdWl0YSIsImVtYWlsIjoicHBAayIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODQ1NTg3MTQsImV4cCI6MTU4NDgxNzkxNH0.TN0r3HjFb4qhDM1R2fadEneyoQmHPmNO3VGoOsbi1X4'
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
