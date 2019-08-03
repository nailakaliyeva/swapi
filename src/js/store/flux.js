const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			favorites: [],
			favePlanets: [],
			faveVehicles: []
		},
		actions: {
			addToFavoritePeople: object => {
				let store = getStore();
				let obj = store.favorites.find(whatever => whatever.name === object.name);
				if (obj === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}
			},
			addToFavoritePlanets: object => {
				let store = getStore();
				let obj = store.favePlanets.find(whatever => whatever.name === object.name);
				if (obj === undefined) {
					setStore({ favePlanets: store.favePlanets.concat(object) });
				}
			},
			addToFavoriteVehicles: object => {
				let store = getStore();
				let obj = store.faveVehicles.find(whatever => whatever.name === object.name);
				if (obj === undefined) {
					setStore({ faveVehicles: store.faveVehicles.concat(object) });
				}
			},
			deleteFromFav: object => {
				let store = getStore();
				let arr = store.favorites;
				let index = store.favorites.findIndex(e => e.name === object.name);
				arr.splice(index, 1);
				setStore({ favorites: arr });
				//console.log(index);
				//store.favorites.forEach(e => console.log(e.name));
			},
			deleteFromFavePlanets: object => {
				let store = getStore();
				let arr = store.favePlanets;
				let index = store.favePlanets.findIndex(e => e.name === object.name);
				arr.splice(index, 1);
				setStore({ favePlanets: arr });
				//	console.log(index);
				//store.favePlanets.forEach(e => console.log(e.name));
			},
			deleteFromFaveVehicles: object => {
				let store = getStore();
				let arr = store.faveVehicles;
				let index = store.faveVehicles.findIndex(e => e.name === object.name);
				arr.splice(index, 1);
				setStore({ faveVehicles: arr });
				//	console.log(index);
				//store.favePlanets.forEach(e => console.log(e.name));
			}

			// let repeat = false;
			// for (let i = 0; i < store.favorites.length; i++) {
			// 	if (store.favorites[i].name === object.name) {
			// 		repeat = true;
			// 	}
			// }

			// if (repeat === false) setStore({ favorites: store.favorites.concat(object) }); //this works :)
		}
	};
};

export default getState;
