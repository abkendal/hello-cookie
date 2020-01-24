<template>
  <div>
  	<span id="trigger--nav"></span>
  	<!-- Nav bar -->
		<nav class="nav" id="nav">
			<div class="nav__inner" id="nav-inner">
				<a href="/" class="nav__link">Welcome</a>
				<a href="/" class="nav__link">About Us</a>
				<a href="/" class="nav__logo"><logo /></a>
				<a href="/" class="nav__link">Cookies</a>
				<a href="/" class="nav__link">Contact</a>
			</div>
		</nav>
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},
	data: function(){
		return{
			
		}
	},
	mounted(){
		
		

	},
}
</script>
