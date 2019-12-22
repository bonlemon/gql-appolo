const { GraphQLObjectType } = require('graphql');
const { director, movie } = require('./mutations');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        ...director,
        ...movie,
    }),
});

module.exports = { Mutation };
