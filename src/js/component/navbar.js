import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<button className="btn btn-primary">People</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-success">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-warning">Vehicles</button>
				</Link>
			</nav>
		);
	}
}
