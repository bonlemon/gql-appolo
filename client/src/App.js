import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import AppoloClient from 'apollo-boost';
import { AppoloProvider } from 'react-apollo';

const client = new AppoloClient({
  uri: 'http://localhost:3333/graphql'
})

class App extends Component {
  render() {
    return (
        <AppoloProvider client={client}>
          <MuiThemeProvider theme={theme}>
            <Tabs />
          </MuiThemeProvider>
        </AppoloProvider>

    );
  }
}

export default App;
