/* Create a small HTTP server using Express */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((resp) => {
    res.end(`This is the list of our students\n${resp}`);
  }).catch(() => {
    res.end('This is the list of our students\nCannot load the database');
  });
});

module.exports = app.listen(port);
