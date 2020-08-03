import React, { useState, useEffect, useRef } from 'react';
import TopNav from './../../components/TopNav.js';
import ReactMarkdown from 'react-markdown';

function Article(props) {
	let wrapper = useRef();

	function animate() {
		let childs = wrapper.current.childNodes;
		childs.forEach((element) => {
			if (element.getBoundingClientRect().top > window.innerHeight * 0.9) element.classList.add('animateOnShow');
		});
	}

	const [ data, updateData ] = useState('');
	function extractArticle() {
		fetch('/static/media/' + props.match.params.article_name)
			.then((Response) => Response.text())
			.then((Response) => updateData(Response))
			.then(() => setTimeout(animate, 100))
			.catch((err) => alert(err));
	}

	useEffect(() => {
		extractArticle();
	}, []);

	return (
		<React.Fragment>
			<TopNav />
			<div
				className="bg-light m-2 mb-4 mt-4 roundBorder p-2"
				style={{ minHeight: 'calc(100vh - 100px)' }}
				ref={wrapper}
			>
				<ReactMarkdown source={data} />
			</div>
		</React.Fragment>
	);
}

export default Article;
