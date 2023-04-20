import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
//import type * as CSS from 'csstype';
import style from "./Sensor.module.css";
import styles from "../pages/NEWGUI.module.css"


type IncreaseType = {
    /** Style props */
    increaseTop?: Property.Top;
    increaseLeft?: Property.Left; 
  };
  
  const IncreaseButton: FunctionComponent<IncreaseType> = ({
    increaseTop,
    increaseLeft
  
  }) =>  {
    const sensorStyle: CSS.Properties = useMemo(() => {
      return {
          top:increaseTop,
          left:increaseLeft,
      };
    }, [increaseTop, increaseLeft
    ]);
    return (
        <div className={styles.increase1}>
        <div className={styles.increaseChild} />
        <div className={styles.div32}>+</div>
    </div>
      );
    };