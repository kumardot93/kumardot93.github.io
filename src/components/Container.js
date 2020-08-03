import React from 'react';

function Container(props) {
	return (
		<div className={`ml-auto mr-auto content p-4 ${props.className}`}>
			<div className={`bg-dark ml-auto mr-auto p-4 roundBorder ${props.innerClassName}`}>{props.children}</div>
		</div>
	);
}

export default Container;
