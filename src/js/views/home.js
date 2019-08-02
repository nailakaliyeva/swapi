import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class People extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-info">Peoples names</h1>
							<ul className="list-group">
								{store.people &&
									store.people.map((e, i) => {
										return (
											<li key={i} className="list-group-item">
												{e.name}
											</li>
										);
									})}
							</ul>
							<h1 className="text-center text-info">Planets</h1>
							<ul className="list-group">
								{store.planets &&
									store.planets.map((e, i) => {
										return (
											<li key={i} className="list-group-item">
												{e.name}
											</li>
										);
									})}
							</ul>
							<h1 className="text-center text-info">Vehicles</h1>
							<ul className="list-group">
								{store.vehicles &&
									store.vehicles.map((e, i) => {
										return (
											<li key={i} className="list-group-item">
												{e.name}
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
