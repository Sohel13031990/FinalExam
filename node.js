var http = require('http');
var express =require("express");
var app = express();
var server= http.Server(app);

app.get('/',function(request,response){
  
  response.SendFile(__dirname+'/view1.html');
  
});

app.get('/HTML',function(request,response){
  
  response.SendFile(__dirname+'/view2.html');
});
app.get('/HTML',function(request,response){
  
  response.SendFile(__dirname+'/view3.html');
});