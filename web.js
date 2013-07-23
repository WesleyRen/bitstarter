var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  var Buffer = fs.readFileSync('index.html'); 
  response.send(Buffer.toString('utf-8',0,Buffer.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
