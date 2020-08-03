import React from 'react';
import styles from './css/Bio.module.css';

function Bio(props) {
	return (
		<div className={`TextAppearAnimation ${styles.Bio} ${props.className}`}>
			<p className="text-light text-justify p-2">
				Hi!, I am Aditya. I am a pre-final year student at IIT Jodhpur. I am a tech lover and this website will
				give you some insight of my intrests and field of work. Currently, I am actively working on React,
				Django and Artificial Intelligence.I have shared some of my work that you can find in the works section.
			</p>
		</div>
	);
}

export default Bio;
