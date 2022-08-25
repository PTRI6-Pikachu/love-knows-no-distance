// IMPORT MODULES
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const app = express();
const PORT = process.env.PORT || 3000;


/** DEFINE GRAPHQL SCHEMA */
const userType = new GraphQLObjectType ({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt},
        firstName: { type: GraphQLString},
        lastName: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType", 
    fields: () => ({
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: {type: GraphQLInt}}, 
            resolve(parent, args) {
                return userData
            }
        }
    })

});

const Mutation = 'write mutation here';

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});

/** MOUNT GRAPHQL API */
app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}));

/** HANDLE PARSING REQUEST BODY FOR JSON, URL AND COOKIES */
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/** DEFINE ROUTE HANDLERS */
// add code for express route handlers here

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */
app.use("*", (request, response) => {
    response.status(404).send("Error: Page not found");
  });

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

/** START THE SERVER AND LISTEN FOR CLIENT REQUESTS */
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});