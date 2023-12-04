import React, { useContext, useEffect, useState } from "react";
import { Context} from "../store/appContext"; 
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ReturnItems from "./returnItems";

export const Home = () => {
    
	const { store, actions } = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [isFavorite, setIsFavorite] = useState(false);
	
	
	const handleInitialData = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();
	}

	const handleFetchDetails = async () =>{
		actions.getPeopleDetails();
		actions.getPlanetsDetails();
		actions.getStarshipsDetails();
	}
	const handleAsynccalls = async () => {
		setIsLoading(true);
		await handleInitialData();
		await handleFetchDetails();
		setIsLoading(false);

	}

	const addToFavorites = (item) => {
	const itemIndex = favorites.findIndex(favorite => favorite.uid === item.uid);
	if (itemIndex !== -1) {
	setFavorites(favorites.filter(favorite => favorite.uid !== item.uid));
	setIsFavorite(false);
	} else {
	setFavorites([...favorites, item]);
	setIsFavorite(true);
	}
	};
	
	const removeFromFavorites = (item) => {
		setFavorites(favorites.filter(favorite => favorite.uid !== item.uid));
	 };

	useEffect(() => {
		if (!store.people.length || !store.planets.length || !store.starships.length) {
		handleAsynccalls();
		}
	}, []);

	
	
	return isLoading ? (<div className="d-flex justify-content-center">
	<div className="spinner-border text-warning" role="status">
		<span className="visually-hidden">Loading...</span>
	</div>
 	</div>) : (

	<div className="text-center mt-5">
		
	<div className="dropdown">
	<button className="dropdown-toggle" type="button" data-bs-toggle="dropdown">Favorites</button>
	<div className="dropdown-menu">
	{favorites.map((favorite, index) => (
		<div className="dropdown-item" key={index}>
		<span>{favorite.name}</span>
		<button className="removeButton" onClick={() => removeFromFavorites(favorite)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
	<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
	</svg></button>
			</div>
	))}
	</div>
	</div>
		
			
			<h2>People: </h2>
			<ReturnItems items={store.people} type="people" addToFavorites={addToFavorites} getDetails={(person) => `Gender: ${person.details.properties.gender}`} />
				
			<h2>Planets: </h2>
			<ReturnItems items={store.planets} type="planets" addToFavorites={addToFavorites} getDetails={(planet) => `Population: ${planet.details.properties.population}`} />
			
			<h2>Starships: </h2>
			<ReturnItems items={store.starships} type="starships" addToFavorites={addToFavorites} getDetails={(starship) => `Model: ${starship.details.properties.model}`} />
		</div>			
	);
};