// Import dependencies

// Server and Socket
const express = require('express');
const cors = require('cors');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:3000']
    }
});
let prevLat = 0;
let prevLong = 0;
const INTIAL_LAT = 30.1559364;
const INTIAL_LONG = -97.4031088;
const ANGLE_TO_NORTH= 36;


// const sock = socket('http://localhost:8888');
const input_socket_port = 8888;

var spawn = require("child_process").spawn;
var process = spawn('python',["./test.py"])  

// Serial Port
//Handle Serial Port Connections
//-----------------------------------------------
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

// Define serial port
const usb_port = new SerialPort({ path:'COM5', baudRate: 9600 });

// Define the parser
const parser = usb_port.pipe(new ReadlineParser())


// Test connection
usb_port.on('open', function () {
    console.log("Arduino connected")
    io.emit('connection', true);
});

// Handles errors
usb_port.on('error', function (err) {
    console.error('Error:', err.message);
  });

server.on("error",function(err){
    console.log('Error:', err.message);
});

io.on('connection', (socket) => {
    socket.on('controls', (message) => {
      console.log(`Arduino received message: ${message}`);
      usb_port.write(message);
    });
  
  });

let data_JSON = {};

// Read data from serial port
parser.on("data", (data) => {
    data_JSON = parse_line(data.toString());
    //console.log("JSON: " + JSON.stringify(data_JSON));
    io.emit('serialdata', data.toString());
});

//-----------------------------------------------------
// Post to TBC
app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json(data_JSON)
});

app.get('/mqtt', (req, res) => {
    res.json(mqtt_JSON)
});


// app.post('/message', function(req, res) {
//     // Get sent data.
//     var user = req.body;
//     // Do a MySQL query.
//       // Neat!
//       console.log("here")
//       res.end('Success');
//     });


// Start the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});


// Start the socket
server.listen(input_socket_port, () => console.log('Input socket on port: ' + input_socket_port));
// server.listen(output_socket_port, ()=> console.log('Output socket on port: ' + socket_port));
// server.open(output_socket_port);
//Handle Control Data
// server.on('connection', ()=>{
//     console.log("gi");
// })


io.on('controls', (data)=>{
    console.log("CONTROLS DATA: ", data);
});


io.on('open',()=>console.log("gg"));




// Parse function
function parse_line(parser) {

    let split = parser.split(',');
    let tea = Number(split[0]);
    let teb = Number(split[1]);
    let tec = Number(split[2]);
    let tmr = Number(split[3]);
    let tsp = Number(split[4]);
    let tvf = Number(split[5]);
    let tol = Number(split[6]);
    let hpc = parseFloat(split[7]);
    let lpc = parseFloat(split[8]);
    let laa = Number(split[9]);
    let lab = Number(split[10]);
    let lac = Number(split[11]);
    let lad = Number(split[12]);
    let lae = Number(split[13]);
    let laf = Number(split[14]);
    let iph = parseFloat(split[15]);
    let max = parseFloat(split[16]);
    let may = parseFloat(split[17]);
    let gas = Number(split[18]);
    let stp = parseFloat(split[19]);
    let eba = Number(split[20]);
    let ebb = Number(split[21]); 
    let seb = Number(split[22]); 
    let ptv = parseFloat(split[23]);
    let hps = split[24];
    let msa = split[25];
    let msb = split[26];
    let msc = split[27];
    let msd = split[28];
    let pta = Number(split[29]);
    let ptb = Number(split[30]);
    let ptc = Number(split[31]);
    let ptd = Number(split[32]);
    let pte = Number(split[33]);
    let ptf = Number(split[34]);
    let ptg = Number(split[35]);
    let pth = Number(split[36]);
    let pti = Number(split[37]);
    let ptj = Number(split[38]);
    
    let data = {
        tea	:	tea,
        teb	:	teb,
        tec	:	tec,
        tmr	:	tmr,
        tsp	:	tsp,
        tvf	:	tvf,
        tol	:	tol,
        hpc	:	hpc,
        lpc	:	lpc,
        laa	:	laa,
        lab	:	lab,
        lac	:	lac,
        lad	:	lad,
        lae	:	lae,
        laf	:	laf,
        iph	:	iph,
        max	:	max,
        may	:	may,
        gas	:	gas,
        stp	:	stp,
        eba	:	eba,
        ebb	:	ebb,
        seb	:	seb,
        ptv	:	ptv,
        hps	:	hps,
        msa	:	msa,
        msb	:	msb,
        msc	:	msc,
        msd	:	msd,
        pta	:	pta,
        ptb	:	ptb,
        ptc	:	ptc,
        ptd	:	ptd,
        pte	:	pte,
        ptf	:	ptf,
        ptg	:	ptg,
        pth	:	pth,
        pti	:	pti,
        ptj	:	ptj
    }
    
    return data;
}
function makeMQTT() {
    if (prevLat == 0 && prevLong == 0){
        prevLat = INTIAL_LAT;
        prevLong = INTIAL_LONG;
    }
    let delta_x = stp * Math.cos(IPH);
    let  delta_y = -stp * Math.sin(IPH);
    let delta_z = stp * Math.cos(IPH);
    depth = prev_depth - delta_y;
    lat = prev_lat + (delta_x * Math.cos(ANGLE_TO_NORTH)) - (delta_z*Math.sin(ANGLE_TO_NORTH));
    long = prev_long + (delta_x *
        Math.sin(ANGLE_TO_NORTH)) + (delta_z*Math.cos(ANGLE_TO_NORTH)); 
}

let mqtt_JSON = { 
    mining: false,
    latitude: 50,
    longitude: -118.326172,
    heading_deg: 4.20420,
    depth_m: 1.234,
    length_m: 5.215
};

