/* var http = require('http');

function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running.."); */

var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(8000);

	io.on('connection', function(socket){
		socket.emit('alert','hello world :0' + Math.random());

		socket.on('movement', function(data){
			console.log(data);
		});

		socket.on('chat', function(data){
			console.log(data);
			socket.broadcast.emit('chat', data);
		});

	});



console.log("Eventide Server is now running..");