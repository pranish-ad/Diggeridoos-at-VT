import { FunctionComponent } from "react";
import DangerBackground from "./DangerBackground";
// import Sensor from "./Sensor";
import SensorDisplayRanged from "./SensorDisplayRange";
import PowerBox from "./PowerBox"
import style from "./Sensor.module.css";
import styles from "../pages/NEWGUI.module.css"

type PowerType = {
    /** Style props */
    labelText: String;
  };

interface HighPower {
    /** The value that the sensor is currently reporting. */
    reading: number;
  
    /** The sensor reading's upper bound for safe operation of the machine. The
     * background colors of the reading and of the upper bound turn red when the
     * reading is greater than this value. Must be greater than or equal to the
     * `safeBoundLower` prop. */
    safeBoundUpper: number;
  
    /** The sensor reading's lower bound for safe operation of the machine. The
     * background colors of the reading and of the lower bound turn red when the
     * reading is less than this value. Must be less than or equal to the
     * `safeBoundUpper` prop. */
    safeBoundLower: number;
  }
  
  interface Props {
    /** The values for the sensor with the indicator shown on the top left. */
    sensorAValues: HighPower;
  
    /** The values for the sensor with the indicator shown in the top middle. */
    sensorBValues: HighPower;
  
    /** The values for the sensor with the indicator shown on the top right. */
    sensorCValues: HighPower;

    labelText: String;
  }
  

export const HighPower = (props: Props, powerType: PowerType) => {
  return (
    //style={powerStyle}
    <div className={style.PowerBox}>
    <div className={styles.grid}>
    <div className={styles.currentA}>Current [A]</div>
    <div className={styles.wattageW}>Wattage [W]</div>
       
    <SensorDisplayRanged 
      reading= {props.sensorBValues.reading}
      safeBoundLower = {props.sensorBValues.safeBoundLower}
      safeBoundUpper = {props.sensorBValues.safeBoundUpper}
      sensorLabelText=''
      sensorWarningLabel='High Power Current'
      sensorTop="30px" 
      sensorLeft="35px"/>         
    <SensorDisplayRanged 
      reading= {props.sensorCValues.reading}
      safeBoundLower = {props.sensorCValues.safeBoundLower}
      safeBoundUpper = {props.sensorCValues.safeBoundUpper}
      sensorLabelText=''
      sensorWarningLabel='High Power Wattage'
      sensorTop="30px"
      sensorLeft="280px"/>
    
  </div>
  <div className={styles.HPborder} />
          <div className={styles.totalHighPower}>
            TOTAL HIGH POWER CONSUMPTION
          </div>
  </div>
  );
}
