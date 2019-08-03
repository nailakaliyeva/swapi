import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Vehicles extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-danger">Vehicles</h1>
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
												{e.name}
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
