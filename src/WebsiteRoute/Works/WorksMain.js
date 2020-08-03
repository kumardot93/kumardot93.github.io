import React from 'react';
import TopNav from './../../components/TopNav.js';
import Article1 from './../../Articles/Article1.md';

function WorksMain() {
	var data = [
		{
			title: 'Extending scope of use of Redux for reuse: Open Close Principal On Redux',
			description:
				'We can apply open close principle to redux and extend its usage. We can provice template reducer in node packages and export it. The user package/app can then extend the template reducer accordinglly',
			article: Article1
		}
	];
	var disp = data.map((art, index) => {
		return (
			<div className="m-1 p-2 bg-secondary roundBorder animateOnShow">
				<h3>{art.title}</h3>
				<p className="ml-2">{art.description}</p>
				<a href={`/article${art.article.substring(art.article.lastIndexOf('/'))}/`} className="text-light">
					Read full article
				</a>
			</div>
		);
	});
	return (
		<React.Fragment>
			<TopNav />
			<div className="content mt-4">
				<div className="bg-dark m-3 p-4 roundBorder text-light">
					<h1 className="text-center text-info mb-4">Works</h1>
					{disp}
				</div>
			</div>
		</React.Fragment>
	);
}

export default WorksMain;
