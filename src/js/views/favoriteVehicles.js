import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class FavoriteVehicles extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-warning">Favorite Vehicles</h1>
							<ul className="list-group">
								{store.faveVehicles &&
									store.faveVehicles.map((e, i) => {
										return (
											<li key={i} className="list-group-item d-flex justify-content-between">
												<h5>{e.name}</h5>
												<button
													type="button"
													className="btn btn-danger"
													onClick={() => actions.deleteFromFaveVehicles(e)}>
													Remove from the list
												</button>
											</li>
										);
									})}
							</ul>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
