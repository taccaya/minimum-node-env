const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('hello, docker start');
});

module.exports = app;
