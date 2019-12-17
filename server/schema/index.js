const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } = require( 'graphql');

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

let movies = [
    {
        id: "1",
        name: 'Movie 1',
        year: 2018,
        directorId: 1,
    },
    {
        id: "2",
        name: 'Movie 2',
        year: 2017,
        directorId: 1,
    },
    {
        id: 3,
        name: 'Movie 3',
        year: 2016,
        directorId: 3,
    },
];

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
