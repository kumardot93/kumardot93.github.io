import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router'; //Router is the entry point for the whole app

ReactDOM.render(<Router />, document.getElementById('root'));

function AnimateIfInView() {
	let elements_to_animate = document.getElementsByClassName('animateOnShow');
	elements_to_animate = Array.from(elements_to_animate);
	elements_to_animate.forEach((element) => {
		let element_position = element.getBoundingClientRect().top;
		if (element_position < window.innerHeight * 0.9) {
			element.classList.add('animateOnShowStart');
			element.classList.remove('animateOnShow'); //Remove so that this element will not be fetched on scroll
		}
	});
}

document.onscroll = () => {
	//on scroll event to triger animation when element appear
	AnimateIfInView();
};

export { AnimateIfInView };
