import React from "react";
import {gql, useQuery} from '@apollo/client';

const getCitiesQuery = gql`
{
    cities{
        name
        id
        description
    }
}
`

function CityList() {
    const { loading, error, data } = useQuery(getCitiesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    return (
      <div >
        <ul id="city-list">
            <li> city 1</li>
            <li> city 2</li>
            <li> city 3</li>
        </ul>
      </div>
    );
  }
  
  export default CityList;
  