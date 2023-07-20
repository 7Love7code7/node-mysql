var express = require('express');
var port = process.env.PORT || 3000; //put your preferred port number
var app = express();
var UserController = require("./Controller/UserController");

//for routing
app.use('/', UserController); 
app.use('/',express.static('pages'));

app.listen(port,() =>{
    console.log('Server started! At http://localhost:' + port);
  });
