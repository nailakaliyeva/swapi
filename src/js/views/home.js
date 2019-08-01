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
										<div key={i}>
											<li>{e.name}</li>
											<li>{e.age}</li>
										</div>
									);
								})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
