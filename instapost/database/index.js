const mongoose = require('mongoose');
//database name
const mongoUri = 'mongodb://localhost/instapost';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
//checks db connected
db.once('connected', function() {
  console.log('Mongodb connected...');
});

module.exports = db;
