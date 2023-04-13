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

export{getCitiesQuery, getCountriesQuery, addCityMutation };