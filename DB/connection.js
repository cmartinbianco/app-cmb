const mongoose = require('mongoose');

// const URI = "mongodb+srv://mongodbUser:Cl@udi01971@cluster0.ggfky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URI = mongodb;

const connectDB = async() => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('DB Connected!');
}

module.exports = connectDB;
