import React, { Component, useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends Component {
	state = {
		btnSpinner: 'none',
		sent: 'none'
	};
	sendEmail = (event) => {
		this.setState({ btnSpinner: 'inline-block', sent: 'none' });
		event.preventDefault();
		emailjs.sendForm('gmail', 'template_VNxNugFx', event.target, 'user_0kHrzGfZCveWlQGrtLc06').then(
			(result) => {
				this.setState({ btnSpinner: 'none', sent: 'inline-block' });
				console.log(result.text);
			},
			(error) => {
				this.setState({ btnSpinner: 'none' });
				console.log(error.text);
			}
		);
	};
	render() {
		return (
			<Presentation
				onSubmit={this.sendEmail}
				btnSpinner={this.state.btnSpinner}
				sent={this.state.sent}
				className={this.props.className}
			/>
		);
	}
}

function Presentation(props) {
	let wrapper = useRef();
	function animate() {
		let childs = wrapper.current.childNodes;
		childs.forEach((element) => {
			if (element.getBoundingClientRect().top > window.innerHeight * 0.9) element.classList.add('animateOnShow');
		});
	}
	useEffect(() => {
		setTimeout(animate, 100);
	}, []);
	return (
		<form
			className={`text-light w-100 p-2 animateOnShow overflow-hidden ${props.className}`}
			onSubmit={props.onSubmit}
			id="contact-form"
			ref={wrapper}
		>
			<h3 className="text-center">Contact me</h3>

			<label>Name: </label>
			<input className="form-control mb-2" type="text" name="user_name" required />
			<label>Email:</label>
			<input className="form-control mb-2" type="email" name="user_email" required />
			<label>Message</label>
			<textarea className="form-control mb-2" rows="4" name="message" />
			<button className="btn btn-success m-3 d-block ml-auto mr-auto" type="submit">
				<span
					className="spinner-border spinner-border-sm"
					style={{
						marginRight: '6px',
						display: props.btnSpinner
					}}
				/>
				<sub
					className="material-icons p-0"
					style={{
						marginRight: '6px',
						display: props.sent
					}}
				>
					done
				</sub>
				send
			</button>
		</form>
	);
}

export default ContactForm;
