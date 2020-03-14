<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<Header title="Sistema de Fornecimento" :hideToggle="true"/>
		<Menu/>
		<Content/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/users_templates/Header'
import Footer from './components/users_templates/Footer'
import Menu from './components/users_templates/Menu'
import Content from './components/users_templates/Content'

export default {
	name: 'App',
	components: { Header, Footer, Menu, Content },
	computed: mapState(['isMenuVisible'])
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

