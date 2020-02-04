const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
const PORT = 3333;

server.use(cors());

// Connect to DB
// mongoose.connect('mongodb://Ivan:1q2w3e@ds145369.mlab.com:45369/graphql-appolo-2', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://Ivan:1q2w3e@ds257648.mlab.com:57648/graphql-appolo', { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => console.log("DB server connected!"))
    // .catch(e => console.log("DB error", e));

// mongoose.connect('\'mongodb://localhost:27017/gql-apollo', { useNewUrlParser: true, useUnifiedTopology: true });

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log(`Connected to DB!`));

server.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started! http://localhost:' + PORT + '/graphql');
});
