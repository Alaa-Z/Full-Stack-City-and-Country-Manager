import React from "react";
import {gql, useQuery} from '@apollo/client';
import { getCitiesQuery } from "../queries/queries";


function CityList() {

    const { loading, error, data } = useQuery(getCitiesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data);
    const displayCity = (city) => {
        return (
            <>
                <li key={city.id}> {city.name}</li> 
            </>
        );
    }
    return (
      <div >
        <ul id="city-list">  
            {data.cities.map(city =>displayCity(city))}          
        </ul>
      </div>
    );
  }
  
  export default CityList;
  