const { Link } = require('react-router');
const React = require('react');

module.exports = function Poems(props) {
	return (
		<div className="my-3">
			Poems By Rumi
			<ul>
				{props.route.poems.map((poem, index) => (
					<li key={poem.id}>
						<Link to={`/poems/${poem.id}`}>{poem.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
