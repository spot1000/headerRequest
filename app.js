var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;

app.enable('trust proxy');


app.get('/', function(req, res) {
  var headerObj = req.ip;
  res.send(headerObj)
})

app.listen(port, function() {
  console.log("server running on port " + port);
});
