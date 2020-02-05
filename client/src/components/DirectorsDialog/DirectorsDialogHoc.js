import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removeDirectorMutation } from './mutations';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphql = graphql(removeDirectorMutation, {
    props: ({ mutate }) => ({
        removeDirector: id => mutate({
            variables: id,
            refetchQueries: [{ query: directorsQuery }]
        })
    })
});

export default compose(withGraphql);
