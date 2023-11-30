import React, { useContext, useEffect } from "react";
import { Context} from "../store/appContext"; 
import "../../styles/home.css";

export const Home = () => {
    
	const { store, actions } = useContext(Context);
	
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
		await handleInitialData();
		await handleFetchDetails();

	}
	useEffect(() => {
		handleAsynccalls();
	}, []);
	
	return (

					
		<div className="text-center mt-5">
		

			
			<h2>People: </h2>
				<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{store.people.map((person) => (
					<div key={person.uid}>
						<div className="card"  style={{width: '18rem;'}}>
								<img src="https://cdn-m-net.dstv.com/images/WidgetBilboard/2020/07/17/788137/14/1594982049-34_Star_Wars__The_Rise_of_Skywalker_Showpage_Billboard_1600_x_800.jpg" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<h5 className="card-title">{person.name}</h5>
									<p className="card-text">{person.details && person.details.properties && (<p key={person.uid}>Height: {person.details.properties.height}</p>)}</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
						</div>					
					</div> ))}
				</div> 
			
			<h2>Planets: </h2>
				<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{store.planets.map((planet) => (
					<div key={planet.uid}>
						<div className="card"  style={{width: '18rem;'}}>
							<img src="https://cdn-m-net.dstv.com/images/WidgetBilboard/2020/07/17/788137/14/1594982049-34_Star_Wars__The_Rise_of_Skywalker_Showpage_Billboard_1600_x_800.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>	
								<p className="card-text">{planet.details && planet.details.properties && (<p key={planet.uid}>Diameter: {planet.details.properties.diameter}</p>)}</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div> 
					</div> ))}
			
				</div>
			<h2>Starships: </h2>
				<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{store.starships.map((starship) => (
					<div key={starship.uid}>
						<div className="card"  style={{width: '18rem;'}}>
							<img src="https://cdn-m-net.dstv.com/images/WidgetBilboard/2020/07/17/788137/14/1594982049-34_Star_Wars__The_Rise_of_Skywalker_Showpage_Billboard_1600_x_800.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">	
								<h5 className="card-title">{starship.name}</h5>
								<p className="card-text">{starship.details && starship.details.properties && (<p key={starship.uid}>Model: {starship.details.properties.model}</p>)}</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div> ))}
			</div> 
		</div>
	);
};