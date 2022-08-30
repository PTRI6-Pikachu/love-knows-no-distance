const { dummyUsers } = require('./dummyData/dummyUsers');
const { dummyPosts } = require('./dummyData/dummyPosts')

const resolvers = {
  Query: {
    getAllUsers() { return dummyUsers }, // THIS WILL CONNECT TO THE MONGO DATABASE (BUT CAN SUB DUMMYDATA)
    getAllPosts() { return dummyPosts } // THIS WILL CONNECT TO THE MONGO DATABASE
  },

  // TODO: ADD MONGO DATABASE LOGIC
  // Mutation: {
  //   createPost (id) { },
  //   updatePost(postId, name, password) { },
  //   deletePost(postId, name, password) { },
  //   createPostQueryInput(id) { },
  //   deletePostQuery(id) { }
  // }


  // ADD SUBSCRIPTION CODE HERE
}

module.exports = { resolvers };