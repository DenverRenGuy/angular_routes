const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bp = require('body-parser');
var root = __dirname;
const app = express();

app.use(express.static(path.resolve(root, 'client')));
app.use(express.static(path.resolve(root, 'client/partials')));
app.use(express.static(path.resolve(root, 'bower_components')));
app.use(bp.json());

//Database Connections
//require('./server/config/mongoose.js');

var listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port);
});
