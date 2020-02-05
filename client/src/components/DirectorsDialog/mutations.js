import { gql }  from 'apollo-boost';

export const  removeDirectorMutation = gql`
    mutation ($id: ID!) {
        removeDirector(id: $id) {
            name
        }
    }
`;