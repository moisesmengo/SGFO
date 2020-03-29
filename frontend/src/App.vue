<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !admin}">
		<Header title="Sistema de Fornecimento" 
			:hideToggle="!admin"/>
		<Menu v-if="admin"/>
		<Loading v-if="validatingToken "/>
		<Content v-else/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/users_templates/Header'
import Footer from './components/users_templates/Footer'
import Menu from './components/users_templates/Menu'
import Loading from './components/users_templates/Loading'
import Content from './components/users_templates/Content'
import axios from 'axios'
import { baseApiUrl, adminKey, providerKey} from  './global'

export default {
	name: 'App',
	components: { Header, Footer, Menu, Content, Loading },
	computed: mapState(['isMenuVisible', 'admin', 'fornecedor']),
	data() {
		return {
			validatingToken: true,
			validateTokenProvider: null
		}
	},
	methods:{
		async validateToken(){
			this.validatingToken = true
			const json = localStorage.getItem(adminKey)
			const adminData = JSON.parse(json)
			this.$store.commit('setAdmin', null)

			if(!adminData){
				this.validatingToken = false
				return this.$route.push({name: 'login-admin'})
			}

			const res = await axios.post(`${ baseApiUrl}/validateTokenAdmin`, adminData)

			if(res.data){
				this.$store.commit('setAdmin', adminData)
			} else {
				localStorage.removeItem(adminKey)
				this.$route.push({ name: 'login-admin'})
			}

			this.validatingToken = false
		},
	},
	created(){
		this.validateToken()
	}
}
</script>

<style>
	*{
		font-family: "Lato", sans-serif;
	}

	body{
		margin: 0;
	}
	
	#app{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothin: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 200px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu footer"
		;
	}

	#app.hide-menu{
		grid-template-areas:
			"header header"
			"content content"
			"footer footer"
		;
	}
</style>

