import React, { useState } from "react";
import { useQuery, useMutation} from '@apollo/client';
import { getCountriesQuery, addCityMutation, getCitiesQuery } from "../queries/queries";

function AddCity() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [countryId, setCountryId] = useState("");

    const [addCity] = useMutation(addCityMutation, {
        refetchQueries: [{ query: getCitiesQuery }]
    });

    const { loading, error, data } = useQuery(getCountriesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const displayCountry = (country) => {
        return (
            <>
                <option key={country.id} value={country.id}> {country.name}</option> 
            </>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        addCity({ variables: { name, description, countryId } },
            );
        setName("");
        setDescription("");
        setCountryId("");
      }

    
    return (
      <div >
        <form id="add-city" onSubmit={handleSubmit}>
            <div className="field">
                <label> City Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="field">
                <label> Description:</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div className="field">
                <label> Country:</label>
                <select onChange={(e)=>setCountryId(e.target.value)}>
                    <option>Select Country</option>
                    {data.countries.map(country =>displayCountry(country))}  
                </select>
            </div>
            <button type="submit"> Add</button>

        </form>
        
      </div>
    );
  }
  export default AddCity;
