/*Ant Media Server is capable of ultra-low latency streaming with WebRTC*/
var express = require('express');
var bodyParser = require('body-parser'); // middle ware
var userEntry = require("./routes/userentry");

var app = express();

console.log('got to express');

// here we are configuring our HTTP server

mongoos (my schema) (my schema fields)

var server = require('http').Server(app);  // module called http
var io = require('socket.io')(server);     // module called io

 console.log('http created');

app.use(express.static(__dirname + '/public')); //use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //i dont know what this does

console.log('past express, bodyParser');

app.use('/User', userEntry); //specific route, similar to url

app.get('/', function(req, res){ // app is the component and "get" is lke a verb.
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(err){
	if(err) throw err;
	console.log('server is listening!');
});

/* 2e. now you can relaod the browser. You are sending the html page to the user now */

/*//                          what their socketID is,
//connection represents a single user
io.on('connection', function(socket) { //adding a listener for an event (io.on(listens to whatever event)

	console.log('a user connected!');
	socket.on('disconnect', function () {
               
                 console.log('a user disconnected');
            });


// #3. 
	//Here we are listing to that user if they bounce some data back to us
	// and listing on a name event "message" for a callback function
	// which accepts that data
	// on a naming convention : "my other event"
	// -as it relates to "message"

	// so if you enter socket.emit("my other event", { my: data });  which is some string
	// and 2nd part is data passed to the funtion then we arrive here.



	 // here we emit that data, we just recieved back to "my other event"
          	socket.emit("my other event", { my: data });  
          	// client.click(function(){  /*my onclick trigger
                // socket.emit("my click event", { my: click });

  /*socket.on("chat message", function(msg) { // event sent also by client.js
                    io.emit("chat message", msg );
                });
  });
*/
/*
// so if we enter 
//socket.emit("chat message", msg  and want some number distributed
//and it goes through this
// server.js
// and client.js. We need to open these to browser pages