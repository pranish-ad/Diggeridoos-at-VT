import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
// import { SerialPort } from "electron";
import NEWGUI from "./pages/NEWGUI";
// import { Socket } from "net";
import { useEffect, useState } from "react";
import { TbmMetrics, metricsValues, /*tempUpdate */} from "./metrics";
import { SerialPort } from "serialport";
import { updateMetrics } from "./metrics";
import { io } from "socket.io-client";
import socketIoClient from "socket.io-client";
import {dts, dataToSend} from "./dataSending";


const socketIn = io("http://localhost:8888");

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  

  // input
  //sendData("0", "1 FUNCTIONAL");
  // console.log("conf");

  //Handle Socket Input
  //-----------------------------------------------
  socketIn.on('serialdata', (data) => {
    updateMetrics(data);
  });


  
  // socketIn.on("connect_error", (err) => {
  //   console.log(`connect_error due to ${err.message}`);
  // });
  //-----------------------------------------------
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);    
 
  // useEffect(()=>{
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  // };
  //   setInterval(()=>{
  //     fetch('https://localhost:8000/message', requestOptions)
  //   },50);
  // });

  useEffect(() => {

    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NEWGUI />} />
    </Routes>
  );
}
export function sendData(dts: dataToSend){ 
  console.log("Sent to server: " + dts.powerState + "" + dts.solenoidState);

  socketIn.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socketIn.emit('controls', dts.powerState + "" + dts.solenoidState);
  socketIn.on('controls', ()=>console.log("confirm"));
}
export default App;