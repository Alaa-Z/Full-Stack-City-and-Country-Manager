import React, { useState } from "react";
import { useQuery, useMutation} from '@apollo/client';
import {getCityQuery} from "../queries/queries";

function CityDetails({ cityId }) {
    const { loading, error, data } = useQuery(getCityQuery, {
        variables: { id: cityId }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data);
    if (!data.city) return null; 

    const { name, description, country} = data.city;

    return (
        <div id="city-details" >
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Country: {country.name} {country.population}
        </p>
        <ul> 
            {country.cities.map(city=>{
                return <li> {city.name}</li>
            })}
        </ul>
      </div>
    );
  }
  
  export default CityDetails;
  