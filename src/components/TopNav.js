import React from 'react';
import styles from './css/TopNav.module.css';
import { Link } from 'react-router-dom';

function TopNav(props) {
	//mostly presenattion component
	return (
		<div className={`bg-dark d-flex flex-row align-items-center p-2 pl-4 pr-4 ${styles.TopNavMain}`}>
			<Link to="/">
				<i className="fa fa-home" /> Home
			</Link>
			<Link to="/works/" className="ml-auto">
				<i className="fa fa-briefcase" /> Works
			</Link>
			<Link to="/about/">
				{' '}
				<i className="fa fa-user" /> About
			</Link>
			<Link to="/contact/">
				<i className="fa fa-address-book" /> Contact
			</Link>
		</div>
	);
}

export default TopNav;
