const { GraphQLID, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { MovieType, DirectorType } = require('../types');
const Director = require('../../models/director');
const Movie = require('../../models/movie');

const director = {
    addDirector: {
        type: DirectorType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) },
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
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: (parent, args) => {
            return Director.findByIdAndRemove(args.id);
        },
    },
    updateDirector: {
        type: DirectorType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) },
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
            name: { type: new GraphQLNonNull(GraphQLString) },
            genre: { type: new GraphQLNonNull(GraphQLString) },
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
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: (parent, args) => {
            return Movie.findByIdAndRemove(args.id);
        },
    },
    updateMovie: {
        type: MovieType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            genre: { type: new GraphQLNonNull(GraphQLString) },
            directorId: { type: GraphQLID },
        },
        resolve: (parent, { id, name, age, directorId }) => {
            return Movie.findByIdAndUpdate(id, { $set: { name, age, directorId } }, { new: true });
        },
    },
};

module.exports = { director, movie };
