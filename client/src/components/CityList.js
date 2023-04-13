import React, { useState } from "react";
import {gql, useQuery} from '@apollo/client';
import { getCitiesQuery } from "../queries/queries";

// components
import CityDetails from "./CityDetails"; 

function CityList() {

    const [selectedCityId, setSelectedCityId] = useState(null);

    const { loading, error, data } = useQuery(getCitiesQuery);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data);
    const displayCity = (city) => {
        return (
            <>
              <li key={city.id} onClick={() => {
                setSelectedCityId(city.id);
                }}
                >
                {city.name}
                </li> 
            </>
        );
    }
    return (
      <div >
        <ul id="city-list">  
            {data.cities.map(city =>displayCity(city))}          
        </ul>
        {selectedCityId && <CityDetails
          cityId={selectedCityId} 
          />}
      </div>
    );
  }
  
  export default CityList;
  