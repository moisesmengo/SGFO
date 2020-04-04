<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !admin}">
		<Header title="Sistema de Fornecimento" 
			:hideToggle="!admin"/>
		<Nav v-if="!admin"/>
		<Menu v-if="admin"/>
		<Loading v-if="validatingToken "/>
		<Content v-else/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Menu from './components/template/Menu'
import Loading from './components/template/Loading'
import Content from './components/template/Content'
import Nav from './components/template/Nav'
import axios from 'axios'
import { baseApiUrl, adminKey, providerKey} from  './global'

export default {
	name: 'App',
	components: { Header, Footer, Menu, Content, Loading, Nav },
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
				this.$router.push({name: 'home'})
				return 
			}

			const res = await axios.post(`${ baseApiUrl}/validateTokenAdmin`, adminData)

			if(res.data){
				this.$store.commit('setAdmin', adminData)
			} else {
				localStorage.removeItem(adminKey)
				this.$router.push({ name: 'home'})
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
		grid-template-rows: 60px 40px 1fr 40px;
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
			"nav nav"
			"content content"
			"footer footer"
		;
	}
</style>

