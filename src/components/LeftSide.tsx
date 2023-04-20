import React, { Component, useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import styles from "../pages/NEWGUI.module.css"
import Sensor from "../components/Sensor";
import PowerBox from "../components/PowerBox"
import { metricsDefaultValues, metricsValues, updateGUIMetrics, TbmMetrics } from '../metrics';
// import { getNextMockMetrics, mockMetricsInitialValues } from '../mockMetrics';
import { HighPower } from './HighPower';
import { LowPower } from './LowPower';
import SensorDisplayRanged from './SensorDisplayRange';
import ProgressBar from 'react-bootstrap/ProgressBar';

type Props = {
  data: TbmMetrics
};
function LeftSide(props: Props) {
  const { linearActuatorExtensionLengthA } = props.data; // get the input value from TbmMetrics

  const rectWidth = linearActuatorExtensionLengthA / 76.4 * 100; // calculate the width of the rectangle based on the input value

  

 
  return(
  <div className={styles.leftSensors}>
    <div className={styles.leftSensorsChild} />
    <div className={styles.temperature}>
      <div className={styles.temperatureC}>
        <span>TEMPERATURE</span>
        <span className={styles.absoluteDirection}> (°C)</span>
      </div>
      <SensorDisplayRanged 
  reading= {props.data.temperatureA}
  safeBoundLower = {0}
  safeBoundUpper = {50}
  sensorLabelText='' 
  sensorWarningLabel='Power Box Temperature'
  sensorTop="56px" 
  sensorLeft="15px"/> 
  <SensorDisplayRanged 
  reading= {props.data.temperatureB}
  safeBoundLower = {0}
  safeBoundUpper = {50}
  sensorLabelText='' 
  sensorWarningLabel='Motor Temperature'
  sensorTop="56px" 
  sensorLeft="162px"/> 
  <SensorDisplayRanged 
  reading= {props.data.temperatureC}
  safeBoundLower = {0}
  safeBoundUpper = {70}
  sensorLabelText='' 
  sensorWarningLabel='Surface Component Box Temperature' 
  sensorLeft="162px"/> 
  <SensorDisplayRanged 
  reading= {props.data.temperatureD}
  safeBoundLower = {0}
  safeBoundUpper = {100}
  sensorLabelText='0' 
  sensorWarningLabel='VFD Temperature' 
  sensorLeft="15px"/> 
  <SensorDisplayRanged 
  reading= {props.data.temperatureE}
  safeBoundLower = {0}
  safeBoundUpper = {50}
  sensorLabelText='' 
  sensorWarningLabel='Stewart Platform Temperature'
  sensorTop="56px" 
  sensorLeft="298.4px"/> 
  <SensorDisplayRanged 
  reading= {props.data.temperatureF}
  safeBoundLower = {80}
  safeBoundUpper = {100}
  sensorLabelText=''
  sensorWarningLabel='Oil Temperature'/>
  <SensorDisplayRanged 
  reading= {props.data.temperatureG}
  safeBoundLower = {80}
  safeBoundUpper = {100}
  sensorLabelText='' 
  sensorWarningLabel = 'TBM Component Box Temperature'
  sensorTop="275px" 
  sensorLeft="162px"/> 
      <div className={styles.leftSensorsChild} />
      <div className={styles.border4} />
      {/* <div className={styles.border4} /> */}
      <div className={styles.tbmElectronics}>Power Box</div>
      <div className={styles.surfaceElectronics}>Surface Component Box</div>
      <div className={styles.stewartPlatform}>
        <span className={styles.safeMinTxtContainer}>
          <span className={styles.absoluteDirection}>Stewart</span>
          <span className={styles.platform}> Platform</span>
        </span>
      </div>
      <div className={styles.vfd}>VFD</div>
      <div className={styles.oil}>Oil</div>
      <div className={styles.motor1}>Motor</div>
      <div className={styles.tbmcomptemp}>TBM Component<br></br>Box</div>

    
      </div>
      
    {/* <div className={styles.motor2}> */}

      {/* <div className={styles.direction}>Cutterface Direction</div>
      <div className={styles.motorItem} />
      <div className={styles.counterClockwise}>
        <p className={styles.safe}>{props.data.cutterheadDirectionIsClockwise ? 'Clockwise' : 'Counter\nClockwise'}</p>
      </div> */}
    {/* </div> */}
    {/* <div className={styles.screenShot20230225At104}> */}
      
      {/* <div className={styles.safeMin0}>Safe Min: 0</div>
      <div className={styles.safeMax3000}>Safe Max: 3300</div> */}
      <div className={styles.pressurePsi}>PRESSURE (PSI)</div>
      <SensorDisplayRanged 
        reading= {props.data.pressureA}
        safeBoundLower = {0}
        safeBoundUpper = {3300}
        sensorLabelText='' 
        sensorWarningLabel = 'Cylinder 1'
        sensorTop="400px" 
        sensorLeft="95px"/>
        <SensorDisplayRanged 
        reading= {props.data.pressureB}
        safeBoundLower = {0}
        safeBoundUpper = {3300}
        sensorLabelText='' 
        sensorWarningLabel={'Cylinder 2'}
        sensorTop="400px" 
        sensorLeft="245px"/> 

        <SensorDisplayRanged 
        reading= {props.data.pressureC}
        safeBoundLower = {0}
        safeBoundUpper = {3300}
        sensorLabelText='' 
        sensorWarningLabel = 'Cylinder 3'
        sensorTop="500px" 
        sensorLeft="95px"/>
        <SensorDisplayRanged 
        reading= {props.data.pressureD}
        safeBoundLower = {0}
        safeBoundUpper = {3300}
        sensorLabelText='' 
        sensorWarningLabel='Cylinder 4'
        sensorTop="500px" 
        sensorLeft="245px"/> 
      <div className={styles.border8} />
      <div className={styles.cylinder1}>Cylinder<br></br>1</div>
      <div className={styles.cylinder2}>Cylinder<br></br>2</div>
      <div className={styles.cylinder3}>Cylinder<br></br>3</div>
      <div className={styles.cylinder4}>Cylinder<br></br>4</div>

      <b className={styles.HydraulicTitle}>Hydraulic Extension Length (cm)</b>
      <div className={styles.hydraulicBorder}>
      <div className={styles.HydraulicText}>{props.data.stringPotentiometer}</div>
      <div className={styles.hydraulicBox}>
        <ProgressBar className={styles.hydraulicBar} animated variant="success" min={0} max={76.2} now={props.data.stringPotentiometer} />
      </div>
      {/* <div className="rectangle" style={{ width: `${widthPercentage}%` }} /> */}
      {/* Add the rectangle here */}
      <div 
        className={styles.rectangle}
        style={{width: `${rectWidth}%`}} // use inline styles to set the width dynamically
      />
      </div>
    </div>
  )
    
}


export default LeftSide;