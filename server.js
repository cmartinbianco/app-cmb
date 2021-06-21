const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello, World! version 5')
  })
  .listen(PORT, () => console.log('Listening on', PORT))