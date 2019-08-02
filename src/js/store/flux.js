const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			favorites: []
		},
		actions: {
			addToFavoritePeople: object => {
				let store = getStore();
				let obj = store.favorites.find(whatever => whatever.name === object.name);
				if (obj === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}
			},
			deleteFromFav: object => {
				let store = getStore();
				let arr = store.favorites;
				let index = store.favorites.findIndex(e => e.name === object.name);
				arr.splice(index, 1);
				setStore({ favorites: arr });
				console.log(index);
				store.favorites.forEach(e => console.log(e.name));
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
