const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const usb_port = new SerialPort({ path: 'COM34',baudRate: 9600 });
// const parser = usb_port.pipe(new ReadlineParser());
// usb_port.pipe(parser);


let serial_data = null;

let app = express();
let server = require('http').Server(app);
let io = require('socket.io-client')(server);
// let socket_port = 8665;

//Server start
// server.listen(socket_port, () => console.log('Socket on port: ' + socket_port))

usb_port.on('open', function () {
  console.log("Connected");
})

// parser.on('data', (data) =>{
//   console.log("hi");
//   console.log(data);
//   io.emit('serialdata', parse_line(data));
// });
// var lineReader = createInterface({
//   input: port
// });

// lineReader.on('line', function (line) {
//   console.log(line);
// });

usb_port.on('data', console.log);

// usb_port.on('readable', () => {
//   console.log('Data:', port.read());
// })

usb_port.on('data', function (data) {
  console.log('Data received:', data);
  io.emit('serialdata', parse_line(data));
});

usb_port.on('error', function (err) {
  console.error('Error:', err.message);
});

app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json(parse_line())
});
app.listen(8002, () => {
    console.log(`Server is running on port 8000.`);
});

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

  let json = JSON.stringify(data);
  return json;
}