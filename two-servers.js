// #Two Servers, One Script.
// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ##Bonus
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!


//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT=8080;


//Create a server
var server = http.createServer(function (request, response){
    // response.statusCode = 503;
    response.end('It Works!! Path Hit: ' + request.url);
});

//Lets start our server
server.listen(8080, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});