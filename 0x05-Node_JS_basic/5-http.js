/* Create a small HTTP server using Node's HTTP module */
const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2]).then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${resp}`);
    }).catch(() => {
      res.statusCode = 404;
      res.end('This is the list of our students\nCannot load the database');
    });
  }
});

module.exports = app.listen(port, hostname);
