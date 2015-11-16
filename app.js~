var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var path = require('path');

var app = express();
app.get("/", function(req, res){
	res.sendFile('index.html',{ root: path.join(__dirname) });
});
var server = http.Server(app)
var io = socketio(server);
io.on("connection", function(socket){
	console.log("client connected");
	socket.on('connect', function(){
		console.log("client connected");
	});
	socket.on('nope', function(){
		console.log("client say nope");
		socket.emit("nope");
	});
	socket.on('disconnect', function(){
		console.log("client disconnected");
	});


});
server.listen(process.env.PORT || 3000), function(){
	console.log("server is running");
});
