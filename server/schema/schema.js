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
                // return _.find(countries, {id:parent.countryId})
                return City.findById(parent.countryId)
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
                // return _.filter(cities,{ countryId : parent.id} );
                return City.find({countryId : parent.id})
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
                // return _.find(cities, {id: args.id})
                return City.findById(args.id)
            }
        },
        country: {
            type: CountryType,
            args:{ id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db
                // return _.find(countries, {id: args.id})
                return Country.findById(args.id)
            }
        },
        countries: {
            type: new GraphQLList(CountryType),
            resolve(parent, args){
                // return countries;
                return Country.find({})
            }
        },
        cities: {
            type: new GraphQLList(CityType),
            resolve(parent, args){
                // return cities;
                return City.find({})
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