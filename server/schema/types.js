const { GraphQLBoolean, GraphQLNonNull } = require('graphql');

const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require( 'graphql');
const Director = require('../models/director');
const Movie = require('../models/movie');

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLString) },
            genre: { type: new GraphQLNonNull(GraphQLString) },
            watched: { type: new GraphQLNonNull(GraphQLBoolean) },
            rate: { type: GraphQLInt },
            director: {
                type: DirectorType,
                resolve: ({directorId}) => {
                    return Director.findById(directorId)
                }
            },
        }
    }
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            movies: {
                type: new GraphQLList(MovieType),
                resolve: ({id}) => {
                    return Movie.find({directorId: id})
                }
            }
        }
    }
});

module.exports = {
    MovieType,
    DirectorType
};
