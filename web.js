var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) 
{
	var file = fs.readFileSync("./index.html");
	var buffer = new Buffer(file, "utf-8");
	console.log(file);
	response.send(buffer.toString("utf-8", 0 , buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
