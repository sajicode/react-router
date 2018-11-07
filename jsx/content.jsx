const React = require('react');
const { Link } = require('react-router');

class Content extends React.Component {
	render() {
		return (
			<div>
				<h1>Rumi's Poetry</h1>
				<div className="navbar navbar-dark">
					<ul className="nav nav-pills navbar-nav">
						<li className={this.context.router.isActive('/about') ? 'active' : ''}>
							<Link to="/about" activeClassName="active">
								About
							</Link>
						</li>
						<li className={this.context.router.isActive('/poems') ? 'active' : ''}>
							<Link to="/poems" activeClassName="active">
								Poetry
							</Link>
						</li>
						<li className={this.context.router.isActive('/contact') ? 'active' : ''}>
							<Link to="/contact" activeClassName="active">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				{this.props.children}
			</div>
		);
	}
}
Content.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = Content;
