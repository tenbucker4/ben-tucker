import React, { useState } from 'react'
import { send } from '@emailjs/browser'
import "../styles/contact.css"

const ContactHero = ({ contactSection }) => {

	const [toSend, setToSend] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })

    const [messageSent, setMessageSent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        )
            .then((response) => {
                console.log("Success", response.status, response.text);
                setToSend({
                    from_name: "",
                    from_email: "",
                    message: ""
                });
                setTimeout(() => {
                    setMessageSent(true)
                  }, 1000)
                  setTimeout(() => {
                    setMessageSent(false)
                  }, 6000)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

	return (
		<section id="contact" ref={contactSection}>
			<h2 className='section-header bright'>Contact Me</h2>
			<p>Have a question or looking to get in touch? Send me a message and I'll get back to you as soon as possible.</p>
			<div className="contact-form">
				<form onSubmit={onSubmit} autoComplete='off'>
					<div className='form-entry'>
						<input name="from_name" className="form-input" id="from_name" type="text" value={toSend.from_name} onChange={handleChange} />
						<label className="form-label" htmlFor="from_name">Name</label>
					</div>
					<div className='form-entry'>
						<input name="from_email" className="form-input" id="from_email" type="email" value={toSend.from_email} onChange={handleChange} />
						<label className="form-label" htmlFor="from_email">Email</label>
					</div>
					<div className='form-entry'>
						<textarea name="message" className='form-input' type="text" id="message" rows={8} value={toSend.message} onChange={handleChange} />
						<label className='form-label' htmlFor="text">Message</label>
					</div>
					{messageSent? (<div>Thanks! I'll get back to you shortly.</div>) : null}
					<button type="submit">Send</button>
				</form>
			</div>
		</section>
	)
}

export default ContactHero