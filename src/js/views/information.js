import { useParams } from "react-router";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Information = () => {
    const {store} = useContext(Context);
    const {kind, uid} = useParams();

    const entityData = store[kind].find(entity => entity.uid === uid);

    return (
        <div className="informationContainer">
        {kind === "people" &&(
            <div>
                <p>Name: {entityData.name}</p>
                <p>Skin Color: {entityData.details.properties.skin_color}</p>
                <p>Mass: {entityData.details.properties.mass}</p>
                <p>Height: {entityData.details.properties.height}</p>
                
            </div>
        )}
        {kind === "planets" &&(
            <div>
                <p>Name: {entityData.name}</p>
                <p>Gravity: {entityData.details.properties.gravity}</p>
                <p>Population: {entityData.details.properties.population}</p>
                <p>Terrain: {entityData.details.properties.terrain}</p>
                <p>Climate: {entityData.details.properties.climate}</p>
               
            </div>
        )}
        {kind === "starships" &&(
            <div>
                <p>Name: {entityData.name}</p>
                <p>Crew: {entityData.details.properties.crew}</p>
                <p>Length: {entityData.details.properties.length}</p>
                <p>Model: {entityData.details.properties.model}</p>
                <p>Class: {entityData.details.properties.starship_class}</p>
                
            </div>
        )}
       <Link to={`/`}><button className="button-32">Return to the Ship</button></Link>
        </div>
    )
}