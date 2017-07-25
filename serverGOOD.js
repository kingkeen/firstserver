// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTgood = 7000;
var PORTbad = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestGood(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You're beautiful on the inside and outside.");
}

function handleRequestBad(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You're hideous on the inside and outside.");
}

var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

// Here we start our server so that it can begin listening to client requests.
serverGood.listen(PORTgood, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You are a brilliant full stack developer!");

});

serverBad.listen(PORTbad, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You are a hideous full stack developer!");

});
