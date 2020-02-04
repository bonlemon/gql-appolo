import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';
import { graphql } from 'react-apollo';
import { addDirectorMutation } from '../DirectorsForm/mutations';
import { movieQuery } from '../MoviesTable/queries';
import { directorsQuery } from './queries';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
        addMovie: ({movie}) => mutate({
            variable: movie,
            refetchQueries: [{movieQuery}]
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorsQuery));
