const { GraphQLSchema } = require('graphql');

const { Query } = require('./queries');
const { Mutation } = require('./mutations/index');

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
