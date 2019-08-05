import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class Popover extends React.Component {
	render() {
		let d = this.props.data;
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="card mb-3 position-absolute"
							style={{
								"max-width": "540px",
								"z-index": "100"
							}}>
							<div className="row no-gutters">
								<div className="col-md-4">
									<img src="..." className="card-img" alt="..." />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{d.name}</h5>
										<p className="card-text">
											{d.hair_color}
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">Last updated 3 mins ago</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Popover.propTypes = {
	data: PropTypes.object
};
