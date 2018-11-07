const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const History = require('history');
const Content = require('./content.jsx');
const About = require('./about.jsx');
const Contact = require('./contact.jsx');
const Poem = require('./poem.jsx');
const Poems = require('./poems.jsx');
const { withRouter } = require('react-router');

const poems = require('../poems.js');

let { Router, Route, Link } = ReactRouter;

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
	queryKey: false
});

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Content}>
			<Route path="/about" component={About} />
			<Route path="/poems" component={Poems} poems={poems} />
			<Route path="/poems/:id" component={Poem} poems={poems} />
			<Route path="/contact" component={withRouter(Contact)} />
		</Route>
	</Router>,
	document.getElementById('content')
);
