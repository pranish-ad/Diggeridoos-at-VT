import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import style from "./PowerBox.module.css";
import Sensor from "./Sensor";
import styles from "../pages/NEWGUI.module.css"
import DangerBackground from "./DangerBackground";



type powerType = {
  /** Style props */
  powerPosition?: Property.Position;
  powerTop?: Property.Top;
  powerRight?: Property.Right;
  powerWidth?: Property.Width;
  powerHeight?: Property.Height;
  powerColor?: Property.Color;
  labelText: String;
};

const Power: FunctionComponent<powerType> = ({
    powerPosition,
    powerTop,
powerRight,
powerWidth,
powerHeight,
powerColor,
labelText,

}) => {
  const powerStyle: CSS.Properties = useMemo(() => {
    return {
        position:powerPosition,
        top:powerTop,
        right:powerRight,
        width:powerWidth,
        height:powerHeight,
        color:powerColor,
    };
  }, [
    powerPosition,powerTop,powerRight,powerWidth,powerHeight, powerColor,
  ]);

  return (
    <div className={style.PowerBox} style={powerStyle}>
        <div className={styles.grid}>
            {/* <div className={styles.voltageV}>Voltage [V]</div> */}
            <div className={styles.currentA}>Current [A]</div>
            <div className={styles.wattageW}>Wattage [W]</div>
            {/* <Sensor sensorLabelText= '' sensorTop="20.81px" sensorLeft="0px"></Sensor> */}
            <Sensor sensorLabelText = '' sensorTop="20.81px" sensorLeft="140px"></Sensor>
            <Sensor sensorLabelText = '' sensorTop="20.81px" sensorLeft="270px"></Sensor>
          </div>
          <div className={styles.border} />
          <div className={styles.totalHighPower}>
            {labelText}
          </div>
     </div>

  );
};

export default Power;
