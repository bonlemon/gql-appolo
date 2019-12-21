const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } = require( 'graphql');
const { movies } = require('../data');

const  MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
        }
    }
});

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
    })
});

module.exports = new GraphQLSchema({ query: Query });
