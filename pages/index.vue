<template>
	<div class="home content">
		
		
		<!-- Hero image -->
		<div class="home__hero content__hero">
			<div class="desktop-container">
				<img src="~assets/images/home-hero.jpg" alt="">
			</div>
		</div>

		<!-- Home content blocks -->
		<div class="home__content">
			<span class="home__divider"></span>
			<h2 class="home__content-headline">Gourmet cookies,<br>fresh out of the oven.</h2>
		</div>
		<div class="block block--a">
			<div class="block__inner container">
				<div class="block__media">
					<img src="~assets/images/block1.jpg" alt="" class="block__image">
				</div>
				<div class="block__content">
					<h3 class="block__headline">Delicious meets oven fresh</h3>
					<p class="block__copy">Our cookies are always made to order, which means you're getting them fresh out of the oven every time.</p>
					<!-- <a href="/" class="block__btn">Learn more</a> -->
				</div>
			</div>
		</div>

		<div class="block block--b">
			<div class="container">
				<div class="block__inner">
					<div class="block__content">
						<h3 class="block__headline">Melt in your mouth</h3>
						<p class="block__copy">Enjoy our decadent toffee and chocolate chip cookies while theyre still warm.</p>
						<!-- <a href="/" class="block__btn">Learn more</a> -->
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
					<h3 class="block__headline">Heaven in just one bite</h3>
					<p class="block__copy">Get either a half or a full dozen delicious, freshly made mini-cookies and wash them down with a cold glass of milk.</p>
					<a href="/" class="block__btn">Learn more</a>
				</div>
			</div>
		</div>

		<div class="block block--b">
			<div class="container">
				<div class="block__inner">
					<div class="block__content">
						<h3 class="block__headline">Invite us to your party</h3>
						<p class="block__copy">Whether its a street festival, birthday or wedding, Hello Cookie is there to turn your event into something truly heart warming.</p>
						<a href="/" class="block__btn">Learn more</a>
					</div>
					<div class="block__media">
						<img src="~assets/images/block2.jpg" alt="" class="block__image">
					</div>
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
		if (window.innerWidth > 786 ) {
			// ** Declare Scene **
				const scene1 = this.$scrollmagic.scene({
				    // ID of element where animation starts
				    triggerElement: '#trigger--nav',

				    // {0,0.5,1} - animations starts from {top,center,end} of window
				    triggerHook: 0,

				    // Duration of animation
				    duration: 200
				})
			    // Declaration of animation and attaching to element
			    .setTween('#nav-logo', { 
			    	css: { 
			       		width: 100 // the tween durtion can be omitted and defaults to 1
			    	}
				})
				// Add Scene to controller
				this.$scrollmagic.addScene(scene1)


			// ** Declare Scene **
				const scene2 = this.$scrollmagic.scene({
					// ID of element where animation starts
					triggerElement: '#trigger--nav',

					// {0,0.5,1} - animations starts from {top,center,end} of window
					triggerHook: 0,

					// Duration of animation
					duration: 200
				})
					// Declaration of animation and attaching to element
				.setTween('#nav-inner', { 
					css: { 
				   		maxWidth: 565 // the tween durtion can be omitted and defaults to 1
					}
				})

			    // Add Scene to controller
			    this.$scrollmagic.addScene(scene2)


		    // ** Declare Scene **
			    const scene3 = this.$scrollmagic.scene({
			        // ID of element where animation starts
			        triggerElement: '#trigger--nav',

			        // {0,0.5,1} - animations starts from {top,center,end} of window
			        triggerHook: 0,

			        // Duration of animation
			        duration: 200
			    })
			    // Declaration of animation and attaching to element
		        .setTween('#nav', { 
		        	css: { 
		        		paddingTop: 10,
		        		paddingBottom: 10,
		        	}
			    })
			    // Add Scene to controller
			    this.$scrollmagic.addScene(scene3)

		    // ** Declare Scene **
			    const scene4 = this.$scrollmagic.scene({
			         // ID of element where animation starts
			         triggerElement: '#trigger--nav',

			         // {0,0.5,1} - animations starts from {top,center,end} of window
			         triggerHook: 0,

			         // Duration of animation
			         duration: 200
			    })
		        // Declaration of animation and attaching to element
		         .setTween('.nav__link', { 
		         	css: { 
		         		fontSize: 18,
		         	}
		         })

		       // Add Scene to controller
		       this.$scrollmagic.addScene(scene4)

	        // ** Declare Scene **
	    	    const scene5 = this.$scrollmagic.scene({
	    	         // ID of element where animation starts
	    	         triggerElement: '#trigger--nav',

	    	         // {0,0.5,1} - animations starts from {top,center,end} of window
	    	         triggerHook: 0,

	    	         // Duration of animation
	    	         duration: 200
	    	    })
	            // Declaration of animation and attaching to element
	             .setTween('.nav__link', { 
	             	css: { 
	             		fontSize: 18,
	             	}
	             })

	           // Add Scene to controller
	           this.$scrollmagic.addScene(scene5)
		}
		

	},
}
</script>


























