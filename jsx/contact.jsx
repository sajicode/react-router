const React = require('react');

module.exports = function Contact(props) {
	return (
		<div>
			<h3>Contact Us</h3>
			<input type="email" placeholder="ninja@dev.test" className="form-control" />
			<textarea type="text" placeholder="your message" className="form-control" />
			<button className="btn btn-primary">send</button>
		</div>
	);
};
