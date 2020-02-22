<template>
	<div class="home content">

		<!-- Hero image -->
		<div class="home__hero content__hero">
			<div class="desktop-container">
				<img src="~assets/images/home-hero.jpg" alt="">
			</div>
		</div>

		<!-- Headline component -->
		<div class="headline">
			<div class="container">
				<span class="headline__divider"></span>
				<h2 class="headline__content-headline">Gourmet cookies,<br>fresh out of the oven.</h2>
			</div>
		</div>

		<!-- Block components -->
		<div class="block block--a">
			<div class="block__inner container">
				<div class="block__media">
					<img src="~assets/images/block1.jpg" alt="" class="block__image">
				</div>
				<div class="block__content">
					<h3 class="block__headline">Delicious meets<br class="mobile-only">oven fresh</h3>
					<p class="block__copy">Our cookies are always made to order, which means you're getting them fresh out of the oven every time.</p>
					<!-- <a href="/" class="block__btn">Learn more</a> -->
				</div>
			</div>
		</div>

		<div class="block block--b">
			<div class="container">
				<div class="block__inner">
					<div class="block__content">
						<h3 class="block__headline">Invite us to your party</h3>
						<p class="block__copy">Whether its a bar mitzvah, birthday or wedding, Hello Cookie is there to turn your event into something truly heart warming.</p>
						<a href="/catering" class="block__btn">Learn more</a>
					</div>
					<div class="block__media">
						<img src="~assets/images/block2.jpg" alt="" class="block__image">
					</div>
				</div>
			</div>
		</div>

		

		<div class="block block--a">
			<div class="block__inner container">
				<div class="block__media">
					<img src="~assets/images/block3.jpg" alt="" class="block__image">
				</div>
				<div class="block__content">
					<h3 class="block__headline">Melt in your mouth</h3>
					<p class="block__copy">Enjoy our decadent toffee and chocolate chip cookies while theyre still warm then wash them down with a cold glass of milk</p>
					<a href="/about" class="block__btn">Learn more</a>
				</div>
			</div>
		</div>


	</div>
</template>

<script>

export default {
	components: {
		
	},
	data: function(){
		return{
			test: true,
		}
	},
	mounted(){

	},
}
</script>


























