const { GraphQLSchema } = require( 'graphql');

const { Query} = require('./queries');
// const { Mutation} = require('./mutation');

module.exports = new GraphQLSchema({
    query: Query,
    // mutation: Mutation
});
