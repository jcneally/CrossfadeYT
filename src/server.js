const express = require('express');
const app = express();
var path = require('path');
const port = 3000;

const startServer = () => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.get('/how-to-use', (req, res) => {
    res.sendFile(path.join(__dirname + '/how-to-use.html'));
  });

  app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'));
  });

  return app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
};

module.exports = startServer;