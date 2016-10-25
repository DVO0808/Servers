var http = require('http');

var PORT1 = 7000;

var PORT2 = 7500;


var goodResponse = ["You Is Smart", "You Is Strong", "You Is Beautiful", "You Is Wonderful"];


var badResponse = ["You Is Dumb", "You Is Weak", "You Is Ugly", "You Is Terrible"];

var random = goodResponse[Math.floor(goodResponse.length * Math.random())];

var random2 = badResponse[Math.floor(badResponse.length *  Math.random())];



function handleRequest1(request, response){
	console.log("someone just contacted me!")
	response.end(random);
};

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function(){
	console.log("I'm listening", PORT1);

});




function handleRequest2(request, response){
	console.log("someone just contacted me too!")
	
	response.end(random2);
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	console.log("I'm also listening", PORT2);

});