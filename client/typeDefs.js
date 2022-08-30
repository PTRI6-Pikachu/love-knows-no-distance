const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        posts: [Post]!
    }
  
    type Post {
        id: ID!
        userID: String!
        title: String!
        author: User!
        queries: [PostQuery]!
        query: PostQuery
    }

    type PostQuery {
        id: ID!
        userID: String!
        postID: String!
        timestamp: Float!
        content: String!
    }
  
    type Query {
        getAllUsers: [User!]!
        user(id: String!): User
        getAllPosts: [Post!]
        posts: [Post]!
        post(id: String!): Post
        
        postQueries(id: String, date: Float, offset: Float): [PostQuery]!
        postQuery(id: String!): PostQuery
    }

    type Mutation {
        createPost(post: CreatePostInput!): Post!
        updatePost(post: UpdatePostInput!): Post!
        deletePost(id: String!): Post!

        createPostQueryInput(postQuery: CreatePostQueryInput!): PostQuery
        deletePostQuery(id: String!): PostQuery
    }

    input UserInput {
        email: String!
        password: String!
    }
  
    input CreatePostInput {
        userID: String!
        title: String!
    }

    input UpdatePostInput {
        id: String!
        title: String!
    }

    input CreatePostQueryInput {
        postID: String!
        timestamp: Float!
        content: String!  
    }
    
  # Subscription
        # ADD API FOR LISTENING TO THE FEED FOR NEW MESSAGES
  `;

module.exports = { typeDefs };

