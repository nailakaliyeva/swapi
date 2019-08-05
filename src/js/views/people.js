import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Popover } from "./popover";

export class People extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<div className="d-flex justify-content-between">
								<h1 className="text-info mb-2">Peoples names</h1>
								<Link to="/favoritePeople">
									<button className="btn btn-primary">Favorite People</button>
								</Link>{" "}
							</div>
							<ul className="list-group">
								{this.state.show ? (
									<div>
										<Popover data={this.state.show} />
									</div>
								) : (
									""
								)}
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
										<li
											key={i}
											className="list-group-item d-flex justify-content-between"
											onClick={() => {
												this.setState({ show: e });
											}}>
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
