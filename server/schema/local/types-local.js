const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require( 'graphql');
const { movies, directors } = require('./data');

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
            movies: {
                type: new GraphQLList(MovieType),
                resolve: (parent) => {
                    return movies.filter(m => m.directorId === Number(parent.id))
                }
            }
        }
    }
});

module.exports = {
    MovieType,
    DirectorType
};
