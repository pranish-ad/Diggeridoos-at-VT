import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
//import type * as CSS from 'csstype';
import style from "./Sensor.module.css";
import styles from "../pages/NEWGUI.module.css"


type DecreaseType = {
    /** Style props */
    decreaseTop?: Property.Top;
    decreaseLeft?: Property.Left; 
  };
  
  const IncreaseButton: FunctionComponent<DecreaseType> = ({
    decreaseTop,
    decreaseLeft
  
  }) =>  {
    const sensorStyle: CSS.Properties = useMemo(() => {
      return {
          top:decreaseTop,
          left:decreaseLeft,
      };
    }, [decreaseTop, decreaseLeft
    ]);
    return (
        <div className={styles.vectorParent}>
        <img className={styles.decreaseChild} alt="" src="/rectangle-622.svg" />
        <div className={styles.div32}>-</div>
    </div>
      );
    };