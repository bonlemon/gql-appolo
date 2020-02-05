import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';
import { graphql } from 'react-apollo';
import { addMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from './queries';

const withGraphql = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addMovie: (movie) => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
})

export default compose(withStyles(styles), withGraphql, graphql(directorsQuery));
