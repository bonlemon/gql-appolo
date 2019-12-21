const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = require( 'graphql');
const { directors } = require('../data');

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
                    console.log(directors);
                    console.log(parent);
                    return directors.find(d => Number(d.id) === parent.directorId)
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
        }
    }
});

module.exports = {
    MovieType,
    DirectorType
};
