const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			favorites: []
		},
		actions: {
			addToFavoritePeople: (star, object) => {
				star.target.style.color = "yellow";
				let store = getStore();

				let obj = store.favorites.find(whatever => whatever.name === object.name);

				if (obj === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}

				// let repeat = false;
				// for (let i = 0; i < store.favorites.length; i++) {
				// 	if (store.favorites[i].name === object.name) {
				// 		repeat = true;
				// 	}
				// }

				// if (repeat === false) setStore({ favorites: store.favorites.concat(object) }); //this works :)
			}
		}
	};
};

export default getState;
