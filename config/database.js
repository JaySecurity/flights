const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () =>
  console.log(`Mongo Connected on at ${db.host} on port ${db.port}`)
);
