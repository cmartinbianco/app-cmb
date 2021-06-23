const mongoose = require('mongoose');

const URI = process.env.mongodb;

const connectDB = async() => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('DB Connected!');
}

module.exports = connectDB;
