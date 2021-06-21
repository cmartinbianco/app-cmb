const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({status: 'Hello World!'});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});