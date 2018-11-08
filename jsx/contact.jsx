const React = require('react');

module.exports = function Contact(props) {
	return (
		<div>
			<h3>Contact Us</h3>
			<input type="email" placeholder="ninja@dev.test" className="form-control mb-3" />
			<textarea type="text" placeholder="your message" className="form-control mb-3" />
			<button className="btn btn-primary">send</button>
		</div>
	);
};
