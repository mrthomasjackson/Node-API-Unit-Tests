var express = require('express');
var body_parser = require('body-parser');
var app = express();

//Config
var port = 3000;

//testing basic route
// app.get('/', function(req, res){
//   res.json({'hello': 'world'})
// });

app.use(body_parser.json());

app.use('/api', require('../routes/api.js')(express))

var server = app.listen(port, function(){
   console.log('Server Active on ', port);
});

module.exports = server;
