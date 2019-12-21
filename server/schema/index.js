const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } = require( 'graphql');
const { MovieType, DirectorType } = require('./types');
const { movies, directors } = require('../data');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return movies.find(movie => movie.id == args.id)
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return directors.find(director => director.id == args.id)
            }
        },
    })
});

module.exports = new GraphQLSchema({ query: Query });
