var express = require('express');
var app = express();
app.get('/note', function(req, res) {
  res.status(200).send('ok');
});
var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('Strings listening on port %s', port);
});
module.exports = server;
