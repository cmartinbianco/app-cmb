const express = require('express');
const connectDB = require('./connection');
const app = express();

connectDB();

app.use(express.json( { extended: false }));

app.use('/api/userModel', require('./Api/user'));

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}!`);
});