var Gpio = require('onoff').Gpio; // onoff nevü csomag
var GIPO4 = new Gpio(4, 'out'); //GIPO port
var GIPO5 = new Gpio(5, 'out'); //GIPO port
var GIPO6 = new Gpio(6, 'out'); //GIPO port
var GIPO7 = new Gpio(7, 'out'); //GIPO port :3
var fs = require('fs'); 
var http = require('http').createServer(function handler(req, res) { //Alap html szerver
  fs.readFile(__dirname + '/gpio.html', function (err, data) { //oof itt a html írd be :3
    if (err) {
      res.writeHead(500);
      return res.end('Error loading socket.io.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

var io = require('socket.io')(http) // socket.io => Ez kell hozzá nyomoréka "Szeretlek >_> ofc #nohomo"

http.listen(8080); //I mean localhost:8080 

io.sockets.on('connection', function (socket) {// WebSocket Kapcsolat
  var buttonState = 0; //gomb változók

  socket.on('state4', function (data) { //gomb állása
    buttonState = data;
    if (buttonState != LEDPin.readSync()) { 
      GIPO4.writeSync(buttonState); //Be-Ki kapcsolja a gipo portot

    }
  });



  socket.on('state5', function (data) { //gomb állása
    buttonState = data;
    if (buttonState != LEDPin.readSync()) { 
      GIPO5.writeSync(buttonState); //Be-Ki kapcsolja a gipo portot

    }
  });





  socket.on('state6', function (data) { //gomb állása
    buttonState = data;
    if (buttonState != LEDPin.readSync()) { 
      GIPO6.writeSync(buttonState); //Be-Ki kapcsolja a gipo portot

    }
  });





  socket.on('state7', function (data) { //gomb állása
    buttonState = data;
    if (buttonState != LEDPin.readSync()) { 
      GIPO7.writeSync(buttonState); //Be-Ki kapcsolja a gipo portot

    }
  });
});