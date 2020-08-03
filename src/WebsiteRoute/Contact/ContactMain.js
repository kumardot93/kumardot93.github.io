import React from 'react';
import TopNav from './../../components/TopNav.js';
import ContactForm from './../../components/ContactForm.js';
import styles from './../Home/components/css/Content.module.css';
import ContactBar from './../../components/ContactBar.js';
import Container from './../../components/Container.js';

function ContactMain() {
	return (
		<React.Fragment>
			<TopNav />
			<Container className="mt-4">
				<h1 className="text-center text-info display-4">Contact</h1>
				<h6 className="text-light mb-4">Feel free to contact me by any of the following means.</h6>
				<span className="text-light">Contact me on social media:</span>
				<ContactBar subClassName="fa-5x btn p-2" className="d-inline m-4" />
				<br />
				<span className="d-flex flex-row text-light align-items-center">
					Contact me on email:
					<a
						className="fa fa-envelope fa-5x m-4 text-light"
						href="mailto: kumar.93@itj.ac.in"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</span>
				<ContactForm className={`p-4  ${styles.homeContact}`} />
			</Container>
		</React.Fragment>
	);
}

export default ContactMain;
