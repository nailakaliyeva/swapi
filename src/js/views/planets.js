import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Planets extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<div>
								<h1 className="text-center text-success">Planets</h1>
								<Link to="/favoritePlanets">
									<button className="btn btn-success">Favorite Planets</button>
								</Link>{" "}
							</div>
							<ul className="list-group">
								{store.planets &&
									store.planets.map((e, i) => {
										let func = () => actions.addToFavoritePlanets(e);
										let color = "far fa-star";
										let tiger = store.favePlanets.find(fav => fav.name === e.name);
										if (tiger !== undefined) {
											color = "far fa-star text-warning";
											func = () => actions.deleteFromFavePlanets(e);
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
