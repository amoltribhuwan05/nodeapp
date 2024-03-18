var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('welcome 2');
=======
 res.send('welcome to node app server on jenkins used azure cloud 2nd time');
>>>>>>> 74d3706d4df476ae94773af19a60e174883bfbe7
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
