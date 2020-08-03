import React from 'react';
import Dp from './components/Dp.js';
import Routs from './components/Routs.js';
import Content from './components/Content.js';
function HomeMain() {
	return (
		<React.Fragment>
			<Dp />
			<Routs />
			<Content />
		</React.Fragment>
	);
}

export default HomeMain;
