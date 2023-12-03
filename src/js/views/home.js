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
	
			<select>
		<option value="Favorites">Favorites</option>
		{favorites.map((favorite, index) => (
		<option key={index} value={favorite.name}>{favorite.name}</option>
		))}
		</select>
			
			<h2>People: </h2>
			<ReturnItems items={store.people} type="people" addToFavorites={addToFavorites} getDetails={(person) => `Gender: ${person.details.properties.gender}`} />
				
			
			<h2>Planets: </h2>
			<ReturnItems items={store.planets} type="planets" addToFavorites={addToFavorites} getDetails={(planet) => `Population: ${planet.details.properties.population}`} />
			
			<h2>Starships: </h2>
			<ReturnItems items={store.starships} type="starships" addToFavorites={addToFavorites} getDetails={(starship) => `Model: ${starship.details.properties.model}`} />
		</div>			
	);
};