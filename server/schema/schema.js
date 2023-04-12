const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
} = graphql;

// Data for cities
var cities = [
    {name:'Lund', id: "1", description:"description 1"},
    {name:'Växjö', id: "2", description:"description 2"}
]
const CityType = new GraphQLObjectType({
    name: 'City',
    fields: ()=>({
        id: {type: GraphQLID},
        name:{type: GraphQLString},
        description:{type: GraphQLString}
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
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})