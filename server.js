const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();

app.use(express.json( { extended: false }));

app.use('/', require('./Api/user'));

app.use('/api/userModel', require('./Api/user'));

app.use('/api/product', require('./Api/product'));

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}!`);
});