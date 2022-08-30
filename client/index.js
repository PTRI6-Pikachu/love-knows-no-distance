const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const express = require('express');
const app = express();



async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();


app.listen({ port: 3000 }, () => {
  console.log('Server listening on port 3000...');
})

// server.listen().then(res => console.log(`GraphhQL Server listening on: ${res.url}`));
