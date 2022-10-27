import React, { useState } from 'react'
import "../styles/contact.css"

const ContactHero = ({ contactSection }) => {
	return (
		<section id="contact" ref={contactSection}>
			<h2 className='section-header bright'>Contact Me</h2>
			<p>Have a question or looking to get in touch? Send me a message and I'll get back to you as soon as possible.</p>
			<div className="contact-form">
				<form autoComplete='off'>
					<div className='form-entry'>
						<input name="name" className="form-input" id="name" type="text" />
						<label className="form-label" htmlFor="name">Name</label>
					</div>
					<div className='form-entry'>
						<input name="email" className="form-input" id="email" type="email" />
						<label className="form-label" htmlFor="email">Email</label>
					</div>
					<div className='form-entry'>
						<textarea name="message" className='form-input' type="text" id="message" />
						<label className='form-label' htmlFor="text">Message</label>
					</div>
					<button>Send</button>
				</form>
			</div>
		</section>
	)
}

export default ContactHero