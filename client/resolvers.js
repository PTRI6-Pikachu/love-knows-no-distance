const { dummyUsers } = require('./dummyData/dummyUsers');
const { dummyPosts } = require('./dummyData/dummyPosts');

const { User } = require('../server/models/User');
const connectDB = require('../server/models/db');
connectDB();

// TODO: ADD LOGIC TO CONNECT TO MONGO DB AND FETCH/CHANGE DATA
const resolvers = {
  Query: {
    getAllUsers() {
      // INSERT COMMAND TO QUERY MONGO DB'S USERS
      return User.find();
    },
    
    getAllPosts() {
      // INSERT COMMAND TO QUERY MONGO DB'S POSTS
    }
  },

  // TODO: ADD MONGO DATABASE LOGIC
  Mutation: {
    createPost: async (parent, args, context) => {
      // CREATE A POST IN THE DB
      // await User.findById({userID});

    }, 
    updatePost(postId, name, password) {
      // UPDATE A POST IN THE DB
    }, 
    deletePost(postId, name, password) {
      // DELETE A POST FROM THE DB
    }, 
    // createPostQueryInput(id) { }, 
    // deletePostQuery(id) { }
  }


  // ADD SUBSCRIPTION CODE HERE
}

module.exports = { resolvers };