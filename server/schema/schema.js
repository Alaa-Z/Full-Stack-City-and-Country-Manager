const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

const City = require('../models/city');
const Country = require('../models/country');
// Data for cities
// var cities = [
//     {name:'Lund', id: "1", description:"description 1", countryId : "1"},
//     {name:'Växjö', id: "2", description:"description 2", countryId : "1"},
//     {name:'New York', id: "3", description:"description 3", countryId : "2"}
// ]

// var countries = [
//     {name: 'Sewden', id: "1", population: '10.42000000' },
//     {name: 'USA', id: "2", population: '331.9000000' }
// ]

const CityType = new GraphQLObjectType({
    name: 'City',
    fields: ()=>({
        id: {type: GraphQLID},
        name:{type: GraphQLString},
        description:{type: GraphQLString},
        country :{
            type: CountryType,
            resolve: (parent, args)=> {  
                // console.log((parent));
                return _.find(countries, {id:parent.countryId})
            }

        }
    })
})

const CountryType = new GraphQLObjectType({
    name: 'Country',
    fields: ()=>({
        id: {type: GraphQLID},
        name:{type: GraphQLString},
        population: {
            type: GraphQLString,
            resolve(parent) {
                return parent.population.toLocaleString();
            }
        },
        cities :{
            type: new GraphQLList(CityType),
            resolve(parent, args){
                return _.filter(cities,{ countryId : parent.id} );
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            args:{ id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db
                return _.find(cities, {id: args.id})
            }
        },
        country: {
            type: CountryType,
            args:{ id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db
                return _.find(countries, {id: args.id})
            }
        },
        countries: {
            type: new GraphQLList(CountryType),
            resolve(parent, args){
                return countries;
            }
        },
        cities: {
            type: new GraphQLList(CityType),
            resolve(parent, args){
                return cities;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addCountry: {
            type: CountryType,
            args: {
                name: {type: GraphQLString},
                population: {type: GraphQLString}
            },
            resolve(parent, args){
                let country = new Country({
                    name: args.name,
                    population: args.population
                });
                return country.save();
            }
        },
        addCity: {
            type: CityType,
            args: {
                name: {type: GraphQLString},
                description: {type: GraphQLString},
                countryId: {type: GraphQLID}
            },
            resolve(parent, args){
                let city = new City({
                    name: args.name,
                    description: args.description,
                    countryId: args.countryId
                });
                return city.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})