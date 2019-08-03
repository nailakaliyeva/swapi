import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class People extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-info">Peoples names</h1>
							<ul className="list-group">
								{store.people.map((e, i) => {
									let func = () => actions.addToFavoritePeople(e);
									let color = "far fa-star";
									let tiger = store.favorites.find(fav => fav.name === e.name);
									if (tiger !== undefined) {
										color = "far fa-star text-warning";
										func = () => actions.deleteFromFav(e);
									}

									//tiger !== undefined ? "far fa-star text-warning" : "far fa-star";}

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
