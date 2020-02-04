
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'graphql';

import { styles } from './styles';
import { addDirectorMutation } from '../DirectorsForm/mutations';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
        addDirectorMutation: director => mutate({
            variables: director,
            refetchQueries: [{query: directorsQuery}]
        })
    })
});

export default compose(withStyles(styles), withGraphqlAdd);
