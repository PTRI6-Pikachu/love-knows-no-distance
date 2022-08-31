/** IMPORT MODULES AND TOOLS */
const { join } = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('../client/typeDefs');
const { resolvers } = require('../client/resolvers');

const { User } = require('./models/User');
const connectDB = require('./models/db')

const PORT = process.env.PORT || 3000;


/** HANDLE PARSING REQUEST BODY FOR JSON, URL AND COOKIES */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/** SERVE HOMEPAGE */
app.all('/', (req, res) =>
    res
        .setHeader('Content-Type', 'text/html')
        .sendFile(join(__dirname, '../client/index.html'))
);

/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER */
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },

    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

/** ADD WEBSOCKET CODE HERE? */
// add code here for websocket connections/disconnections

/** INITIALIZE APOLLO SERVER AND APPLY SERVER MIDDLEWARE */
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
}
startServer();
console.log('Apollo server initialized...')

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});

connectDB();

// TODO: CONVERT SERVER.JS TO TYPESCRIPT
/** UNNEEDED CODE (KEEP UNTIL NEXT SUCCESSFUL DEV MERGE) */

/* MOUNT GRAPHQL API -- ENABLING BRINGS CLIENT TO GRAPHIQL / DISABLING TO APOLLO INTERFACE */
// app.use('/graphql', graphqlHTTP({
//     schema, //
//     graphiql: true
// }));

// const schema = new GraphQLSchema({query: Query, mutation: Mutation});

/* CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */
// app.use("*", (request, response) => {
//     response.status(404).send("Error: Page not found");
//   });
