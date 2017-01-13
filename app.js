var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;

app.enable('trust proxy');


app.get('/', function(req, res) {
  var headerObj = req.headers['x-forwarded-for'] ||
         req.connection.remoteAddress ||
	      req.socket.remoteAddress ||
	           req.connection.socket.remoteAddress;
  var lang = req..headers('Accept-Language');
  var os = req.headers('User-Agent');
  res.send(headerObj + lang + os);
})

app.listen(port, function() {
  console.log("server running on port " + port);
});
