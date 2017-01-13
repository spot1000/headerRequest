var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;

app.enable('trust proxy');


app.get('/', function(req, res) {
  var headerObj = {'ip' : req.headers['x-forwarded-for'] ||
                          req.connection.remoteAddress ||
	                        req.socket.remoteAddress ||
	                        req.connection.socket.remoteAddress,
                  'language':req.get('Accept-Language').split(',')[0],
                  'os' : req.get('User-Agent').split(/[\(\)]/)[1]
                }
  res.send(headerObj);
})

app.listen(port, function() {
  console.log("server running on port " + port);
});
