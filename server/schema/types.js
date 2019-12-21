const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require( 'graphql');
const Director = require('../models/director');
const Movie = require('../models/movie');

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            director: {
                type: DirectorType,
                resolve: (parent) => {
                    return Director.findById(parent.directorId)
                }
            }
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
                resolve: (parent) => {
                    return Movie.find({directorId: parent.id})
                }
            }
        }
    }
});

module.exports = {
    MovieType,
    DirectorType
};
