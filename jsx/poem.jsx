const React = require('react');

module.exports = function Poem(props) {
	let poem = props.route.poems.find((element) => element.id === props.params.id);
	return (
		<div className="row">
			<div className="col mb-3 my-3">
				<img src={poem.img} width="800" height="600" />
			</div>
			<div className="col">
				<h3>{poem.title}</h3>
				<p>{poem.text}</p>
				<p>
					<a href={poem.link} target="_blank">
						Read More...
					</a>
				</p>
			</div>
		</div>
	);
};
