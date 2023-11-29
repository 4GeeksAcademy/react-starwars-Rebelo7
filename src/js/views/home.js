import React, { useContext, useEffect } from "react";
import { Context} from "../store/appContext"; 
import "../../styles/home.css";

export const Home = () => {
    
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions .getStarships();
	}, []);
	
	return (
		<div className="text-center mt-5">
			<h1>STARWARS!</h1>
			<div>
				<h2>People: </h2>
				{store.people.map((person) => <p key={person.uid}>{person.name}</p>)}
			</div> 
			<div>
				<h2>Planets: </h2>
				{store.planets.map((planet) => <p key={planet.uid}>{planet.name}</p>)}
			</div> 
			<div>
				<h2>Starships: </h2>
				{store.starships.map((starship) => <p key={starship.uid}>{starship.name}</p>)}
			</div> 
		</div>
	);
};