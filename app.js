var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;
var math = require('mathjs');
var path = require('path')
var lastTime = Date.now();
var timeStep = 0;
app.use(express.static(__dirname+'/client'));
app.get('/', function(req, res){
  res.sendFile("/index.html");
});


//dev mode
var consoleLogs = false


//Options for the game



io.on('connection', function(socket){

    socket.on('Game', function(un){
        //code here for when client asks for packet 'Game'
    });


});

function playGame(){

    //Time of last update
    var lastTime = Date.now();

    //set server fps
    setInterval(gameLoop, 100);
}

function gameLoop() {
    // milliseconds difference since the last game update
    timeStep = Date.now() - lastTime;
    lastTime += timeStep;


}


http.listen(port, function(){
    console.log('server on *:' + port);
});

playGame();
