import React from 'react';
import styles from './css/Content.module.css';
import ContactForm from './../../../components/ContactForm.js';
import Intrest from './../../../components/Intrest.js';
import Bio from './../../../components/Bio.js'; //Top Bio as if written by me
import Container from './../../../components/Container.js'; //Container for Content

function Content() {
	return (
		<Container className={styles.contentMain}>
			<Bio />
			<Intrest />
			<ContactForm className={`${styles.homeContact}`} />
		</Container>
	);
}

export default Content;
