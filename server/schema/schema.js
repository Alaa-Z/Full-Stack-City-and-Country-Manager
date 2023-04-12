const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} = graphql;

const CityType = new GraphQLObjectType({
    name: 'City',
    fields: ()=>({
        id: {type: GraphQLInt},
        name:{type: GraphQLString},
        description:{type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            args:{ id: {type: GraphQLInt}},
            resolve(parent, args){
                // code to get data from db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})