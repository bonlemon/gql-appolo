import { gql } from 'apollo-boost';

export default AddMovieMutation = gql`
    mutation addMovie($name: String!, $genre: String!, $directorId: ID, $rate: String!, $watched: String!) {
        addMovie(name: $name, genre: $genre, directorId: $directorId, rate: $rate, watched: $watched) {
            name
            genre
            directorId
            rate
            watched
        }
    }
`;