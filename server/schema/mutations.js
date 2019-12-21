const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } = require( 'graphql');
const { MovieType, DirectorType } = require('./types');
const Director = require('../models/director');
const Movie = require('../models/movie');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Movie.findById(args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: (parent, args) => {
                return Movie.find({})
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Director.findById(args.id)
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve: (parent, args) => {
                return Director.find({})
            }
        },
    })
});

module.exports = { Mutation };