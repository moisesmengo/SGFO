import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
