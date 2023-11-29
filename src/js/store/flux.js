const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			starships:[]
			
		},
		actions: {
			getPeople: async () => {
			const store = getStore();
			const textResponse = await fetch("https://www.swapi.tech/api/people");
			const jsonResponse = await textResponse.json();
			setStore({...store, people: jsonResponse.results});
			},
			getPlanets: async () => {
				const store = getStore();
				const textResponse = await fetch("https://www.swapi.tech/api/planets");
				const jsonResponse = await textResponse.json();
				setStore({...store, planets: jsonResponse.results});
			},
			getStarships: async () => {
				const store = getStore();
				const textResponse = await fetch("https://www.swapi.tech/api/starships");
				const jsonResponse = await textResponse.json();
				setStore({...store, starships: jsonResponse.results});
			},
					
		},
	};
};

export default getState;
