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
    cities{
        name
        id
        description
    }
}
`

export{getCitiesQuery, getCountriesQuery };