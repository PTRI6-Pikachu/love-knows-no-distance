const mongoose = require('mongoose');

const MONGO_URI = process.env.ATLAS_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'love-knows-no-distance'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

//rename this to be more specific
const schema = new Schema({
  test: String
});

//rename this to be more specific
const DB = mongoose.model('db', schema);

module.exports = { DB };
