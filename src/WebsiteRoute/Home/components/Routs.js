import React from 'react';
import styles from './css/Routs.module.css';
import { Link } from 'react-router-dom';

function Routs() {
	return (
		<div className={`d-flex flex-column align-items-end animateOnShowStart ${styles.RouteWrapper}`}>
			<div className={`p-1 ${styles.link}`}>
				<Link to="/works/" className="text-dark">
					Works
				</Link>
			</div>
			<div className={`p-1 mt-2 ${styles.link}`}>
				<Link to="/about/" className="text-dark">
					About
				</Link>
			</div>
			<div className={`p-1 mt-2 ${styles.link}`}>
				<Link to="/contact/" className="text-dark">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Routs;
