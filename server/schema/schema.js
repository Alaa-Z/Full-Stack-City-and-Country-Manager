const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

const CityType = new GraphQLObjectType({
    name: 'City',
    fields: ()=>({
        id: {type: GraphQLInt},
        name:{type:GraphQLString},
        description:{type:GraphQLString}
    })
})