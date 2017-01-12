var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  var headerObj = {
    'ip' : req.ip
  }
  res.send(JSON.stringify(headerObj));
})

app.listen(port);
