import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div>
							{store.people &&
								store.people.map((e, i) => {
									return (
										<ul key={i} className="list-group">
											<li className="list-group-item">{e.name}</li>
										</ul>
									);
								})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
