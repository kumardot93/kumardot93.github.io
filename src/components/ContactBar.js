import React from 'react';

function ContactBar(props) {
	return (
		<div className={props.className}>
			<a
				className={`text-light fa fa-facebook p-1 m-1 ${props.subClassName}`}
				aria-hidden="true"
				href="https://www.facebook.com/aditya.aditya.aditya.10"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className={`fa fa-linkedin text-light fa-lg p-1 m-1 ${props.subClassName}`}
				aria-hidden="true"
				href="https://www.linkedin.com/in/aditya2703/"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className={`fa fa-github text-light fa-lg p-1 m-1 ${props.subClassName}`}
				aria-hidden="true"
				href="https://github.com/kumardot93"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className={`fa fa-instagram text-light fa-lg p-1 m-1  ${props.subClassName}`}
				aria-hidden="true"
				href="https://www.instagram.com/d__aaditya/"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	);
}

export default ContactBar;
