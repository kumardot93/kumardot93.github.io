import React from 'react';
import HomeMain from './WebsiteRoute/Home/HomeMain.js'; //Home Page
import ContactMain from './WebsiteRoute/Contact/ContactMain.js'; //Contact page
import Bottom from './components/Bottom.js'; //Bottom bar
import AboutMain from './WebsiteRoute/About/AboutMain.js'; //About Page
import WorksMain from './WebsiteRoute/Works/WorksMain.js'; //Works Page
import Article from './WebsiteRoute/Works/Article.js'; //Article page
import { BrowserRouter as Router, Route } from 'react-router-dom';

function RouterApp(props) {
	return (
		<Router>
			<Route path="/" exact component={HomeMain} />
			<Route path="/contact/" exact component={ContactMain} />
			<Route path="/about/" exact component={AboutMain} />
			<Route path="/works/" exact component={WorksMain} />
			<Route path="/article/:article_name/" component={Article} />
			<Bottom />
		</Router>
	);
}

export default RouterApp;
