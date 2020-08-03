import React, { useEffect } from 'react';
import styles from './css/Bottom.module.css';
import ContactBar from './ContactBar.js';
import { withRouter } from 'react-router-dom';
import { AnimateIfInView } from './../index.js';

function Bottom(props) {
	useEffect(AnimateIfInView, [ props.location.pathname ]); //To animate on every route change
	return (
		<div className={`bg-dark p-2 d-flex flex-row ${styles.bottomMain}`}>
			<h2 className="display-4 d-inline flex-fill text-secondary">Aditya Kumar</h2>
			<div className="d-flex flex-column flex-fill align-items-end">
				<ContactBar className="mt-auto" />
				<a className="text-light" href="mailto: kumar.93@itj.ac.in" target="_blank" rel="noopener noreferrer">
					kumar.93@iitj.ac.in
				</a>
			</div>
		</div>
	);
}

export default withRouter(Bottom);
