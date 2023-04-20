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

interface LowPower {
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
    sensorAValues: LowPower;
  
    /** The values for the sensor with the indicator shown in the top middle. */
    sensorBValues: LowPower;
  
    /** The values for the sensor with the indicator shown on the top right. */
    sensorCValues: LowPower;

    labelText: String;
  }

export const LowPower = (props: Props, powerType: PowerType) => {
  return (
    //style={powerStyle}

    <div className={style.PowerBox}>
    {/* <div className={styles.grid}> */}
    
    <div className={styles.currentA2}>Current [A]</div>
    <div className={styles.wattageW2}>Wattage [W]</div>
     
    <SensorDisplayRanged 
      reading= {props.sensorBValues.reading}
      safeBoundLower = {props.sensorBValues.safeBoundLower}
      safeBoundUpper = {props.sensorBValues.safeBoundUpper}
      sensorLabelText=''
      sensorWarningLabel='Low Power Current'
      sensorTop="235px" 
      sensorLeft="35px"/>         
    <SensorDisplayRanged 
      reading= {props.sensorCValues.reading}
      safeBoundLower = {props.sensorCValues.safeBoundLower}
      safeBoundUpper = {props.sensorCValues.safeBoundUpper}
      sensorLabelText=''
      sensorWarningLabel='Low Power Wattage'
      sensorTop="235px"
      sensorLeft="280px"/>            
  {/* </div> */}
  <div className={styles.LPBorder} />
          <div className={styles.totalLowPower}>
            TOTAL LOW POWER CONSUMPTION
          </div>
  </div>
  );
}
