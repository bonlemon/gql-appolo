let movies = [

    // { "name": "Movie 1", "genre": "Crime-Comedy" },
    // { "name": "Movie 2",  "genre": "Sci-Fi" },
    // { "name": "Movie 3", "genre": "Crime" },
    // { "name": "Movie 4", "genre": "Comedy" },
    // { "name": "Movie 5", "genre": "Sci-Fi-Comedy" },
    // { "name": "Movie 6", "genre": "Black Comedy" },
    
    {
        id: "1",
        name: "Movie 1",
        genre: "Crime-Comedy",
        directorId: 2,
    },
    {
        id: "2",
        name: "Movie 2",
        genre: "Sci-Fi",
        directorId: 3,
    },
    {
        id: 3,
        name: "Movie 3",
        genre: "Crime",
        directorId: 1,
    },
    {
        id: 4,
        name: "Movie 4",
        genre: "Comedy",
        directorId: 1,
    },
    {
        id: 5,
        name: "Movie 5",
        genre: "Sci-Fi-Comedy",
        directorId: 1,
    },
    {
        id: "6",
        name: "Movie 6",
        genre: "Black Comedy",
        directorId: 3,
    },
];



let directors = [
// { "name": "James McTiegue", "age": 71 }
// { "name": "Quentin Tarantino", "age": 55 }
// { "name": "Michael Radford Ritchie", "age": 43 }
// { "name": "Guy Ritchie", "age": 43 }
    {
        id: "1",
        name: "Quentin Tarantino",
        age: 55,
    },
    {
        id: "2",
        name: "James",
        age: 71,
    },
    {
        id: 3,
        name: "Guy Ritchie",
        age: 43,
    },
];

module.exports = {
    movies,
    directors
};