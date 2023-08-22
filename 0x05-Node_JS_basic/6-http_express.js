/* Create a small HTTP server using Express */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

module.exports = app.listen(port);
