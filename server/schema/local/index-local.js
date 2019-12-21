const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require( 'graphql');
const { MovieType, DirectorType } = require('../types');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // return movies.find(movie => movie.id == args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: (parent, args) => {
                // return movies
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // return directors.find(director => director.id == args.id)
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve: (parent, args) => {
                // return directors
            }
        },
    })
});

module.exports = new GraphQLSchema({ query: Query });
