<template>
	<v-app id="app">
		<Header/>
		<v-content>
			<v-container>
				<router-view>

				</router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/users_templates/Header'
export default {
	components: { Header, },
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
	}
</style>

