import React, { useEffect, useRef } from 'react';
import styles from './css/Intrest.module.css';

function Intrest() {
	const wraperElement = useRef();
	useEffect(() => {
		let el_list = wraperElement.current.childNodes;
		el_list = Array.from(el_list);
		el_list.forEach((el) => {
			el.classList.add('animateOnShow');
		});
	}, []);
	return (
		// list of sapan of intrests is appendable
		<React.Fragment>
			<h2 className="text-light">Area of Intrest:</h2>
			<div
				className={`bg-secondary d-flex flex-wrap mb-4 text-dark ${styles.intrestWrapper}`}
				ref={wraperElement}
			>
				<span>Artificial Intelligence</span>
				<span>Asynchronous Programming</span>
				<span>Image Processing</span>
				<span>Financial Market</span>
				<span>Full Stack Development</span>
				<span>React.js</span>
				<span>Maintainable Software Architecture</span>
				<span>Design Principanls and Patterns</span>
				<span>Entrepreneurship</span>
				<span>Management</span>
				<span>Robotics</span>
				<span>IOT</span>
				<span>Technology</span>
				<span>Product Development</span>
			</div>
		</React.Fragment>
	);
}

export default Intrest;
