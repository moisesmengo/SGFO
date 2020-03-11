<template>
	<v-app id="app">
		<Header/>
		<v-content>
			<v-container>
				<router-view>

				</router-view>
			</v-container>
			
		</v-content>
		<Footer/>
	</v-app>
</template>

<script>
import Header from './components/users_templates/Header'
import Footer from './components/users_templates/Footer'
export default {
	components: { Header, Footer },
}
</script>

<style>
	*{
		font-family: "Lato", sans-serif;
	}

	
	#app{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothin: grayscale;

		height: 100vh;
	}
</style>

