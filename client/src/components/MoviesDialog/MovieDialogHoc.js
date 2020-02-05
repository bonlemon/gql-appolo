import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removeMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';

const withGraphql = graphql(removeMovieMutation, {
    props: ({ mutate }) => ({
        removeMovie: id => mutate({
            variables: id,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
});

export default compose(withGraphql);
