import React from "react";
import {gql, useQuery} from '@apollo/client';
import { getCountriesQuery } from "../queries/queries";

function AddCity() {
    const { loading, error, data } = useQuery(getCountriesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const displayCountry = (country) => {
        return (
            <>
                <option key={country.id}> {country.name}</option> 
            </>
        );
    }
    return (
      <div >
        <form id="add-city">
            <div className="field">
                <label> City Name</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label> Description:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label> Country:</label>
                <select>
                    <option>Select Country</option>
                    {data.countries.map(country =>displayCountry(country))}  
                </select>
            </div>
        </form>
        <button> Add</button>
        
      </div>
    );
  }
  export default AddCity;
