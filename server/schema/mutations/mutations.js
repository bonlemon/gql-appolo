const { GraphQLID, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean } = require('graphql');
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
        resolve: (parent, {name, age}) => {
            const director = new Director( {name, age});
            // Save() метод mongoose
            return director.save();
        },
    },
    removeDirector: {
        type: DirectorType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: (parent, {id}) => {
            return Director.findByIdAndRemove(id);
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
            rate: { type: GraphQLInt },
            watched: { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: (parent, { id, name, age, directorId, rate, watched }) => {
            const movie = new Movie({ id, name, age, directorId, rate, watched });
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
        resolve: (parent, { id, name, age, directorId, rate, watched }) => {
            return Movie.findByIdAndUpdate(id, { $set: { name, age, directorId, rate, watched } }, { new: true });
        },
    },
};

module.exports = { director, movie };
