const { users } = require('./dummyData');

const resolvers = {
  Query: {
    getAllUsers() { return users }, // THIS WILL CONNECT TO THE MONGO DATABASE (BUT CAN SUB DUMMYDATA)
    // getAllPosts() { return posts } // THIS WILL CONNECT TO THE MONGO DATABASE
  },

  Mutation: {
    createPost (id) { 'ADD A POST TO THE FEED' },
    updatePost(postId, name, password) { 'EDIT A POST FROM THE FEED' },
    deletePost(postId, name, password) { 'DELETE A POST FROM THE FEED' },
    createPostQueryInput(id) { 'CREATE A POST QUERY' },
    deletePostQuery(id) { 'DELETE A POST QUERY' }
  }

  // ADD SUBSCRIPTION CODE HERE
}

module.exports = { resolvers };