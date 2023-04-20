import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import style from "./Sensor.module.css";
import styles from "../pages/NEWGUI.module.css"
import DangerBackground from "./DangerBackground";

type SensorType = {
  /** Style props */
  sensorPosition?: Property.Position;
  sensorTop?: Property.Top;
  sensorLeft?: Property.Bottom;
  sensorWidth?: Property.Width;
  sensorHeight?: Property.Height;
  sensorTextAlign?: Property.TextAlign;
  sensorLabelText:String;
};

const Sensor: FunctionComponent<SensorType> = ({
    sensorPosition,
sensorTop,
sensorLeft,
sensorWidth,
sensorHeight,
sensorTextAlign,
sensorLabelText,

}) => {
  const sensorStyle: CSS.Properties = useMemo(() => {
    return {
        position:sensorPosition,
        top:sensorTop,
        left:sensorLeft,
        width:sensorWidth,
        height:sensorHeight,
        textAlign:sensorTextAlign,
    };
  }, [
    sensorPosition,sensorTop,sensorLeft,sensorWidth,sensorHeight,sensorTextAlign,
  ]);

  return (
    <div className={style.sensor} style={sensorStyle}>
            {/* <div className={styles.dangerBackgroundParent8}> */}
            <div className={style.sensorLabel} >{sensorLabelText}</div>
            <div className={style.dangerRect}/>
            <div className={styles.frameChild} />
            <img className={styles.frameChild5} alt="" src="/line-113.svg" />
            <div className={styles.frameChild12} />
            <div className={styles.safeMin3}>
              <span className={styles.safeMinTxtContainer}>
                {/* <p className={styles.safe}>{`Safe `}</p> */}
                <p  style={{fontSize: 8}}>Min</p>
              
              </span>
            </div>
            <div className={styles.safeMax3}>
              <span className={styles.safeMinTxtContainer}>
                {/* <p className={styles.safe}>Safe</p> */}
                <p style={{fontSize: 8}}>Max</p>
              </span>
            </div>
            <div className={styles.div9} style={{fontSize: 8}}>100</div>
            <div className={styles.div10}>100</div>
            <div className={styles.div11}>-100</div>

          
     </div>

  );
};

export default Sensor;
