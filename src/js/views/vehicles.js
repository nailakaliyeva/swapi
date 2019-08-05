import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Vehicles extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<div className="d-flex justify-content-between">
								<h1 className="text-warning mb-2">Vehicles</h1>
								<Link to="/favoriteVehicles">
									<button className="btn btn-warning">Favorite Vehicles</button>
								</Link>{" "}
							</div>
							<ul className="list-group">
								{store.vehicles &&
									store.vehicles.map((e, i) => {
										let func = () => actions.addToFavoriteVehicles(e);
										let color = "far fa-star";
										let tiger = store.faveVehicles.find(fav => fav.name === e.name);
										if (tiger !== undefined) {
											color = "far fa-star text-warning";
											func = () => actions.deleteFromFaveVehicles(e);
										}
										return (
											<li key={i} className="list-group-item d-flex justify-content-between">
												<h5>{e.name}</h5>
												<i className={color} onClick={func} />
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
