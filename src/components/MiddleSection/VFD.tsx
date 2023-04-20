import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"
import SensorDisplayRanged from '../SensorDisplayRange';
import { TbmMetrics } from '../../metrics';

type Props = {
    data: TbmMetrics
  };

function VFD(props : Props) {
    return(
        
        <div className={styles.vfdBorder}>
            <b className={styles.generalSystem1}>VFD (Hz)</b>
            <img className={styles.solenoidsChild} alt="" src="/line-83.svg" />
            <div className={styles.vfdtext}>{props.data.PWMtoVoltage}</div>
        </div>
    )
}

export default VFD;