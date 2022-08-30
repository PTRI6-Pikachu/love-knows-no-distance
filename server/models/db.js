const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'love-knows-no-distance'
  })
    .then(() => console.log('Connected to Mongo DB'))
    .catch(err => console.log(err));
};

module.exports = connectDB;