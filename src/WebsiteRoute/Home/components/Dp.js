import React from 'react';
import styles from './css/Dp.module.css';
import dp from './../../../images/pichtml.png';

function Dp() {
	return (
		<div className={styles.DpMain}>
			<img src={dp} className={styles.Dp} alt="" />

			<p className="text-light text-center d-flex flex-row w-100 animateOnShow">
				<span className="flex-fill">Full Satck Developer</span>
				<span className="flex-fill"> | </span>
				<span className="flex-fill">React Developer</span>
				<span className="flex-fill"> | </span>
				<span className="flex-fill"> Django Developer </span>
				<span className="flex-fill">|</span>
				<span className="flex-fill"> Python Developer </span>
				<span className="flex-fill">|</span>
				<span className="flex-fill"> Sport Programmer</span>
			</p>
		</div>
	);
}
export default Dp;
