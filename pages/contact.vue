<template>
	<div class="contact">
		<div class="info contact__item">
			<div class="container">
				<h1 class="info__headline">Contact</h1>
				<p class="info__copy">We'd love to hear from you. Please tell us about the event you would like us to create and we'll conntect with you to get started.</p>
				<h2 class="info__subhead">E-Mail</h2>
				<a href="">hellocookie.to@gmail.com</a>
			</div>
		</div>
		<div class="form contact__item">
			<div class="container">
				<form action="https://formspree.io/moqdoeva" method="POST">
					<div class="form__input">
						<label for="name">Name *</label>
						<input type="text" name="name">
					</div>
					<div class="form__input">
						<label for="phone">Phone Number *</label>
						<input type="text" name="phone">
					</div>
					<div class="form__input">
						<label for="email">E-Mail *</label>
						<input type="email" name="_replyto">
					</div>
					<div class="form__input">
						<label for="business">Business Name (optional)</label>
						<input type="text" name="business">
					</div>
					<div class="form__input">
						<label for="type">Type of Event *</label>
						<input type="text" name="type">
					</div>
					<div class="form__input">
						<label for="attendees">Number of Attendees *</label>
						<input type="text" name="attendees">
					</div>
					<div class="form__input">
						<label for="date">Date *</label>
						<input type="text" name="date">
					</div>
					<div class="form__input">
						<label for="price">Price Range</label>
						<input type="text" name="price">
					</div>
					<div class="form__input">
						<label for="location">Preferred Venue or Event Location</label>
						<input type="text" name="location">
					</div>
					<div class="form__input">
						<label for="special">Speical Request(s)</label>
						<input type="text" name="special">
					</div>
					<div class="form__input form__input--info">
						<label for="info">Information</label>
						<input class="form__input-info" type="textarea" name="info">
					</div>
				  
				  <input class="form__submit" type="submit" value="Request Info">
				</form>
			</div>
		</div>
	</div>
</template>









