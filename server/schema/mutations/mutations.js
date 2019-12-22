const { GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const { MovieType, DirectorType } = require('../types');
const Director = require('../../models/director');
const Movie = require('../../models/movie');

const director = {
    addDirector: {
        type: DirectorType,
        args: {
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
        },
        resolve: (parent, args) => {
            const director = new Director({
                name: args.name,
                age: args.age,
            });

            // Save() метод mongoose
            return director.save();
        },
    },
    removeDirector: {
        type: DirectorType,
        args: {
            id: { type: GraphQLID },
        },
        resolve: (parent, args) => {
            return Director.findByIdAndRemove(args.id);
        },
    },
    updateDirector: {
        type: DirectorType,
        args: {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
        },
        resolve: (parent, { id, name, age }) => {
            return Director.findByIdAndUpdate(id, { $set: { name, age } }, { new: true });
        },
    },
};

const movie = {
    addMovie: {
        type: MovieType,
        args: {
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            directorId: { type: GraphQLID },
        },
        resolve: (parent, args) => {
            const movie = new Movie({
                name: args.name,
                genre: args.genre,
                directorId: args.directorId,
            });
            return movie.save();
        },
    },
    removeMovie: {
        type: MovieType,
        args: {
            id: { type: GraphQLID },
        },
        resolve: (parent, args) => {
            return Movie.findByIdAndRemove(args.id);
        },
    },
    updateMovie: {
        type: MovieType,
        args: {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            directorId: { type: GraphQLID },
        },
        resolve: (parent, { id, name, age, directorId }) => {
            return Movie.findByIdAndUpdate(id, { $set: { name, age, directorId } }, { new: true });
        },
    },
};

module.exports = { director, movie };
