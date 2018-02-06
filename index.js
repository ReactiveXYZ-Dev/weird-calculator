'use strict'

var path = require('path');
var express = require('express');
var app = express();

// serve static files
app.use(express.static('./public/assets'));

// Welcome to weird calculator !
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// listen on port 3000
app.listen(3000, () => console.log('listening on port 3000!'))