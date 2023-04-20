import React, { Component, useEffect, useState } from 'react'
import { FunctionComponent, useMemo } from "react";
import styles from "../../pages/NEWGUI.module.css"
//import IncreaseButton from "./IncreaseButton"
function WaterControl() {


    type readSetValue = {
        setValue: number
    }
    //  const handleSetValue: FunctionComponent<readSetValue> = ({
    //      setValue
    //  });
    

    return (
        <div className={styles.water}>
            <div className={styles.waterChild} />
            <img className={styles.waterItem} alt="" src="/line-85.svg" />
            <img className={styles.waterInner} alt="" src="/line-151.svg" />
            <img className={styles.waterChild1} alt="" src="/line-151.svg" />
            <b className={styles.water1}>WATER</b>
            <b className={styles.water1}>WATER</b>
            <div className={styles.setSpeed3}>
            {/* <div className={styles.set3} onClick={handleSetValue}>Set</div> */}
                <div className={styles.setSpeed4} />
                <div className={styles.setSpeedItem} />
            </div>
            <div className={styles.setSpeed5}>
            {/* <div className={styles.set3} onClick={handleSetValue}>Set</div> */}
                <div className={styles.setSpeed4} />
                <div className={styles.set3}>Set</div>
                <div className={styles.setSpeed4} />    
                <div className={styles.setSpeedItem} />
            </div>
            <div className={styles.rateSolution99}>Rate Solution: 99 gal/sec</div>
            <div className={styles.rateCondition99}>
                Rate Condition: 99 gal/sec
            </div>
            <div className={styles.totalConsumed999}>Total Consumed: 999 gal</div>
            <div className={styles.slurryPumpOnContainer}>
                <span className={styles.safeMinTxtContainer}>
                <span>{`Slurry Pump: `}</span>
                <span className={styles.on}>ON</span>
                </span>
            </div>
            <b className={styles.water1}>WATER</b>
            
            {/* <IncreaseButton></IncreaseButton> */}
               
            <div className={styles.vectorGroup}>
                <img className={styles.decreaseChild} alt="" src="/rectangle-623.svg" />
                <div className={styles.div32}>-</div>
            </div>
            <div className={styles.div71}>+</div>
        </div>
    )
}

export default WaterControl;