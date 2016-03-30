// Bring in the 'express' node module
var express = require('express');

// Create the application instance
var app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3000);
