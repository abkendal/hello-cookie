<template>
	<div>
  		<span id="trigger--nav"></span>
  		<!-- Nav bar -->
		<nav class="nav" id="nav">
			<div class="nav__inner" id="nav-inner">
				<a href="/" class="nav__link">Welcome</a>
				<a href="/catering" class="nav__link">Catering</a>
				<a href="/" class="nav__logo"><logo /></a>
				<a href="/about" class="nav__link">About</a>
				<a href="/contact" class="nav__link highlight">Book Event</a>
			</div>
		</nav>

		<!-- Page template -->
		<nuxt />

		<!-- Footer -->
		<footer class="footer">
			<div class="container">
				<div class="footer__info">
					<div class=""><a href="/" class="footer__logo"><img src="~assets/images/logo.png" alt=""></a></div>
					<div class="footer__company">
						<h3 class="footer__heading">Company</h3>
						<ul class="footer__links">
							<li>
								<a href="/contact" class="footer__link">Contact Us</a>
							</li>
							<li>
								<a href="/about" class="footer__link">About</a>
							</li>
							<li>
								<a href="/contact" class="footer__link">Bookings</a>
							</li>
						</ul>
					</div>
					<div class="footer__social">
						<h3 class="footer__heading">Connect</h3>
						<!-- <a href="/" class="footer__facebook"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><defs><path id="A" d="M.001.001h20V19.88h-20z"/></defs><g fill-rule="evenodd"><path fill="#000" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.99 3.657 9.128 8.438 9.88V12.89h-2.54V10h2.54V7.797c0-2.506 1.493-3.89 3.777-3.89a15.38 15.38 0 0 1 2.238.195v2.46h-1.26c-1.242 0-1.63.77-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.99 20 10"/></g></svg></a> -->
						<a href="http://www.instagram.com/hellocookie.to" class="footer__instagram" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><g fill="#000" fill-rule="evenodd" transform="translate(-.25)"><path fill-rule="nonzero" d="M14.2 0L6.4 0C3.3 0 0.8 2.7 0.8 6L0.8 14C0.8 17.3 3.3 20 6.4 20L14.2 20C17.2 20 19.8 17.3 19.8 14L19.8 6C19.8 2.7 17.2 0 14.2 0ZM17.9 14C17.9 16.2 16.2 18 14.2 18L6.4 18C4.4 18 2.7 16.2 2.7 14L2.7 6C2.7 3.8 4.4 2 6.4 2L14.2 2C16.2 2 17.9 3.8 17.9 6L17.9 14ZM10.2 4.8C7.5 4.8 5.3 7.2 5.3 10 5.3 12.8 7.5 15.2 10.2 15.2 12.9 15.2 15.2 12.8 15.2 10 15.2 7.2 12.9 4.8 10.2 4.8ZM10.2 13.2C8.5 13.2 7.2 11.8 7.2 10 7.2 8.2 8.5 6.8 10.2 6.8 11.9 6.8 13.3 8.2 13.3 10 13.3 11.8 11.9 13.2 10.2 13.2Z"/><ellipse cx="15" cy="4.8" rx="1.2" ry="1.3"/></g></svg></a>
					</div>
				</div>
				<div class="footer__legal">
					<p>© 2019 Hello Cookie. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
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
