import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './config/router'
import './config/msgs'
import store from './config/store'
import './config/bootstrap'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
