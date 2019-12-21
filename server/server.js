const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const server = express();
const PORT = 3005;

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

server.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started! ' + PORT);
});
