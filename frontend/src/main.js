import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './config/router'
import './config/msgs'
import store from './config/store'
import './config/bootstrap'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwibm9tZSI6ImEiLCJlbWFpbCI6ImFAZ29sIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4NDc0MzI5NiwiZXhwIjoxNTg1MDAyNDk2fQ.eLVUHKX4aEuqzVNHWf8-sY5AoQi9xbl4wCElbgmkLXo'
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
