import { FunctionComponent } from "react";
import React, { Component, useEffect, useState } from 'react'
import DangerBackground from "../components/DangerBackground";
import Sensor from "../components/Sensor";
import styles from "./NEWGUI.module.css";
import PowerBox from "../components/PowerBox"
import RightSensors from "../components/RightSensors";
import MiddleSection from "../components/MiddleSection";
import LeftSide from "../components/LeftSide";
import { metricsDefaultValues, metricsValues, updateGUIMetrics, TbmMetrics } from '../metrics';
import { dts, dataToSend, defaultDTS } from '../dataSending';
import { sendData } from '../App'



const NEWGUI: FunctionComponent = () => {
  // Data changing (gui side)
  const [data, setData] = useState<TbmMetrics>(metricsDefaultValues);

  
  
  // Data sending stuff
  const [sent, setSent] = useState<dataToSend>(defaultDTS);

  // Alert
  const [confirmationModalIsShowing, setConfirmationModalIsShowing] = useState(
    false
  );

  function handleSentData(d: dataToSend) {
    dts.powerState = d.powerState;
    dts.solenoidState = d.solenoidState;
    setSent(d);
    sendData(d);
  }
  
    
  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => {
      setData(updateGUIMetrics());
      },
      100
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    }
    

  }, [data])

  return (
    
    <div className={styles.newGui}>
      <LeftSide data={data}/>
      <MiddleSection data={data} sent={sent} setSent={handleSentData} />
      <RightSensors data={data}/>
    </div>
  );
};

export default NEWGUI;