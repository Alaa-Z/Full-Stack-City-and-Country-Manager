import {gql} from '@apollo/client';

const getCountriesQuery = gql`
{
    countries{
        name
        id
    }
}
`
const getCitiesQuery = gql`
{
    cities {
        name
        id
        description
    }
}
`

const addCityMutation = gql`
     mutation($name: String!, $description: String!, $countryId: ID!) {
        addCity(name: $name, description: $description, countryId: $countryId) {
            name
            id
        }
    }
`
const addCountryMutation = gql`
     mutation($name: String!, $population: String!) {
        addCountry(name: $name, population: $population) {
            name
            id
        }
    }
`
const getCityQuery = gql`
    query($id:ID){
        city(id: $id){
            id
            name
            description
            country{
                name
                population
                cities{
                    name
                    id
                }
            }
        }
    }
`
export{getCitiesQuery, getCountriesQuery, addCityMutation , getCityQuery, addCountryMutation };