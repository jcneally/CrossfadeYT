const app = require('../server');

app().on('error', function (e) {
  console.log('Server is already running');
});