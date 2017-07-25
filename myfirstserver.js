var http = require("http");
var PORT = 8080;

function handleRequest(request, response) {
	response.end("it works! the path hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on: https://localhost:%s", PORT);
});
