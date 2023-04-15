import React, { useState } from "react";
import { useMutation} from '@apollo/client';
import { getCountriesQuery,  addCountryMutation } from "../queries/queries";

function AddCountry() {
    const [name, setName] = useState("");
    const [population, setPopulation] = useState("");

    const [addCountry] = useMutation(addCountryMutation, {
        refetchQueries: [{ query: getCountriesQuery }]
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        addCountry({ variables: { name, population } });
        setName("");
        setPopulation("");
      }

    
    return (
      <div >
        <form id="add-country" onSubmit={handleSubmit}>
            <div className="field">
                <label> Country Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="field">
                <label> Population:</label>
                <input type="text" onChange={(e)=>setPopulation(e.target.value)}/>
            </div>
            <button type="submit"> Add</button>

        </form>
        
      </div>
    );
  }
  export default AddCountry;
