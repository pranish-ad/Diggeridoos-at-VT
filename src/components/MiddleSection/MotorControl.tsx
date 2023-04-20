import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"
import { metricsDefaultValues, TbmMetrics, metricsValues } from '../../metrics';
// import { getNextMockMetrics, mockMetricsInitialValues } from '../../mockMetrics';


function MotorControl() {

    const [data, setData] = useState<TbmMetrics>(metricsValues);
    const [isClockWise, setDirection] = useState<boolean>(data.cutterheadDirectionIsClockwise);
    const [speed, changeSpeed] = useState<number>(data.cutterheadSpeed);

    useEffect(() => {
        if (!isClockWise){
            data.cutterheadDirectionIsClockwise = false;
        }
      }, [isClockWise])

    // add side effect to component
    useEffect(() => {
        // create interval
        const interval = setInterval(
          // set number every 5s
          () => setData(metricsValues),
          500
        );
        // clean up interval on unmount
        return () => {
          clearInterval(interval);
        }
        
  
      }, [data])

    return (
        <div className={styles.cutterheadSpeed}>
            <div className={styles.connectionsChild} />
            <div className={styles.currentRpm999}>RPM: {data.cutterheadSpeed.toFixed(1)}</div>
            <img
                className={styles.linearActuatorsItem}
                alt=""
                src="/line-86.svg"
            />
            <b className={styles.motor}>MOTOR</b>
            <div className={styles.counterclockwise}>{isClockWise ? 'Clockwise' : 'Counterclockwise'}</div>
            <div className={styles.setSpeed8}>
                <div className={styles.set3}>Set</div>
                <div className={styles.setSpeed4} />
                <div className={styles.setSpeedItem} />
            </div>
            <div className={styles.torque999Nm}>Torque: {data.cutterheadTorque.toFixed(1)}</div>
            <button onClick={() => setDirection(!isClockWise)} className={styles.reverseDirection}>Reverse Direction</button>
            <div className={styles.increase3}>
                <div className={styles.increaseChild} />
                <div className={styles.div32}>+</div>
            </div>
            <div className={styles.decrease1}>
                <img
                className={styles.decreaseChild}
                alt=""
                src="/rectangle-621.svg"
                />
                <div className={styles.div32}>-</div>
            </div>
        </div>
        
            
    )
}

export default MotorControl;